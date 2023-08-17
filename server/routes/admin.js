const express = require('express');
const connection = require('../config/mysql')
const fs = require('fs');
const path = require('path')
// 导入解析token中间件
const verifyToken = require('../utils/verifyToken')
const uploadMiddleware = require('./upload/upload');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const adminRouter = express.Router();

// 获取个人信息接口
adminRouter.get('/getProfile', verifyToken, (req, res) => {
    // 从验证过的 token 中获取用户信息（例如用户 ID）
    const userId = req.userId; // 这里假设用户信息存储在 req.user 对象中
    console.log(userId)
    // 查询数据库以获取用户的个人信息
    const sql = `SELECT id, name, avatar_url FROM user WHERE id = ?`;
    const values = [userId];

    connection.query(sql, values, (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'An error occurred while fetching user profile' });
        } else {
            if (results.length === 0) {
                res.status(404).json({ error: 'User not found' });
            } else {
                const userProfile = results[0];
                res.json({ profile: userProfile });
            }
        }
    });
});

// 分页获取文章接口
adminRouter.get('/listArticle', verifyToken, (req, res) => {
    const pageNumber = parseInt(req.query.pageNumber) || 1; // 默认页数为1
    const sizePage = parseInt(req.query.sizePage) || 10; // 从查询字符串中获取每页数量
    const offset = (pageNumber - 1) * sizePage;

    const countSql = `SELECT COUNT(*) AS totalCount FROM article`; // 查询总条数
    const sql = `SELECT id, cover_url, title, context, DATE_FORMAT(create_time, \'%Y-%m-%d %H:%i:%s\') AS create_time, read_total, classification, tags FROM article LIMIT ?, ?`;
    const values = [offset, sizePage];

    // 首先执行查询总条数的查询
    connection.query(countSql, (countError, countResults) => {
        if (countError) {
            console.log(countError);
            res.status(500).json({ error: 'An error occurred while fetching article count' });
        } else {
            const totalCount = countResults[0].totalCount;

            // 然后执行分页查询
            connection.query(sql, values, (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ error: 'An error occurred while fetching articles' });
                } else {
                    res.json({ totalCount: totalCount, data: results });
                }
            });
        }
    });
});

// 上传图片
adminRouter.post('/upload', uploadMiddleware, (req, res) => {
    // 处理上传后的操作，req.file 中包含上传文件的信息
    // ...
    const imgName = req.file.filename
    const cover_url = `/images/${imgName}`
    res.status(200).json({code: 200, message: "success", data: cover_url});
});

// 删除图片
adminRouter.delete('/deleteImage/:imageName', (req, res) => {
    const imageName = req.params.imageName; // 从 URL 参数中获取图片名称
    console.log(imageName)
    const imagePath = path.join(__dirname, '../public/images', imageName);
    console.log(imagePath)
    // 使用 fs 模块删除图片文件
    fs.unlink(imagePath, (err) => {
        if (err) {
            console.error('Error deleting image:', err);
            res.status(500).json({error: 'An error occurred while deleting the image'});
        } else {
            res.json({message: 'Image deleted successfully'});
        }
    });
});

// 发布文章
adminRouter.post('/createArticle', verifyToken, (req, res) => {
    const {title, cover_url, context, classification, tags} = req.body;
    console.log(context)
    const htmlContent = md.render(context);
    const newTags = tags.join(', ');
    const userId = req.userId
    const sql = `INSERT INTO article (title, cover_url, context, create_time, update_time, read_total, classification, tags, user_id) VALUES (?, ?, ?, ?,?,?,?,?,?)`;
    const values = [title, cover_url, htmlContent, new Date(), new Date(), 0, classification, newTags, userId];

    connection.query(sql, values, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({error: 'An error occurred while creating article'});
        } else {
            res.json({code:200, message: 'success'});
        }
    });
});

// 修改文章
adminRouter.put('/updateArticle/:id', verifyToken, (req, res) => {
    const articleId = req.params.id;
    const {title, content} = req.body;

    const sql = `UPDATE article SET title = ?, content = ? WHERE id = ?`;
    const values = [title, content, articleId];

    connection.query(sql, values, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({error: 'An error occurred while updating article'});
        } else if (result.affectedRows === 0) {
            res.status(404).json({error: 'Article not found'});
        } else {
            res.json({message: 'Article updated successfully'});
        }
    });
});

// 获取所有文章的评论接口
adminRouter.get('/getAllComments', verifyToken, (req, res) => {
    const sql = `
        SELECT 
            c.id, 
            c.name, 
            c.content, 
            DATE_FORMAT(c.create_time, '%Y-%m-%d %H:%i:%s') AS create_time, 
            c.article_id,
            a.title AS article_title 
        FROM comments c
        JOIN article a ON c.article_id = a.id
        ORDER BY c.create_time DESC`;

    connection.query(sql, (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'An error occurred while fetching comments' });
        } else {
            res.json({ comments: results });
        }
    });
});

module.exports = adminRouter