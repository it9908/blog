const express = require('express');
const connection = require('../config/mysql')
const router = express.Router();
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// 获取文章列表
router.get('/listArticle', (req, res) => {
    const pageNumber = parseInt(req.query.pageNumber) || 1; // 默认页数为1
    const itemsPerPage = parseInt(req.query.pageSize) || 7; // 默认条数7
    const offset = (pageNumber - 1) * itemsPerPage;

    const sqlCount = 'SELECT COUNT(*) AS total FROM article'; // 查询总条数
    //DATE_FORMAT(create_time, '%Y-%m-%d %H:%i:%s')
    const sqlData = `SELECT id, cover_url, title, DATE_FORMAT(create_time, '%Y-%m-%d %H:%i:%s') AS create_time, read_total, classification, tags FROM article LIMIT ?, ?`;
    const valuesData = [offset, itemsPerPage];

    connection.query(sqlCount, (error, countResult) => {
        if (error) {
            console.log(error);
            return;
        }

        const total = countResult[0].total; // 获取总条数

        connection.query(sqlData, valuesData, (dataError, results) => {
            if (dataError) {
                console.log(dataError);
                return;
            }
            res.json({code: 200, total, data: results});
        });
    });
});

// 获取某一篇文章
router.get('/getArticle/:id', (req, res) => {
    const articleId = req.params.id; // 获取路由参数中的文章ID

    const sql = 'SELECT id, cover_url, title, context, DATE_FORMAT(create_time, \'%Y-%m-%d %H:%i:%s\') AS create_time, read_total, classification, tags FROM article WHERE id = ?';
    const values = [articleId];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({error: 'Error fetching article'});
        }

        if (results.length === 0) {
            return res.status(404).json({error: 'Article not found'});
        }

        const article = results[0];
        res.json({article});
    });
});

// 更新浏览量
router.post('/updateViewCount/:id', (req, res) => {
    const articleId = req.params.id;

    const sql = 'UPDATE article SET read_total = read_total + 1 WHERE id = ?';
    const values = [articleId];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({error: 'Error updating view count'});
        }
        res.json({success: true});
    });
});

router.get('/getKeyWord', (req, res) => {
    const keyword = req.query.keyword; // 获取查询参数中的关键词

    const sql = `
    SELECT DISTINCT title AS value FROM article WHERE title LIKE ? 
    UNION
    SELECT DISTINCT classification AS value FROM article WHERE classification LIKE ?
    UNION
    SELECT DISTINCT tags AS value FROM article WHERE tags LIKE ?
  `;
    const values = [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({error: 'Error searching articles'});
        }
        res.json({data: results});
    });
});

router.get('/search', (req, res) => {
    const keyword = req.query.keyword; // 获取查询参数中的关键词

    const sql = `
    SELECT * FROM article
    WHERE title LIKE ? OR classification LIKE ? OR tags LIKE ?
  `;
    const values = [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({error: 'Error searching articles'});
        }
        res.json({data: results});
    });
});

router.get('/getComments/:articleId', (req, res) => {
    const articleId = req.params.articleId; // 获取路由参数中的文章ID

    const sql = 'SELECT id,name,content,DATE_FORMAT(create_time, \'%Y-%m-%d %H:%i:%s\') AS create_time,article_id FROM comments WHERE article_id = ?';
    const values = [articleId];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({error: 'Error fetching comments'});
        }
        res.json({data: results});
    });
});

// 发布评论
router.post('/submitComment', (req, res) => {
    const {name, articleId, content} = req.body;

    const sql = 'INSERT INTO comments (name, content, create_time, article_id) VALUES (?, ?, ?, ?)';
    const values = [name, content, new Date(), articleId];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(500).json({error: 'Error submitting comment'});
        }
        res.json({success: true});
    });
});

// 登录
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM user WHERE name = ?';
    connection.query(query, [username], (err, results) => {
        if (err) {
            return res.status(500).json({ message: '数据库查询错误' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: '用户不存在' });
        }

        const user = results[0];

        if (password !== user.password) {
            return res.status(401).json({ message: '密码不正确' });
        }

        // 登录成功后生成 JWT token
        const token = jwt.sign({ userId: user.id }, 'mxz_blog_key', { expiresIn: '72h' });

        res.json({ code: 200, message: '登录成功', token });
    });
});

module.exports = router;
