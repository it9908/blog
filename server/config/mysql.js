const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    timezone: '08:00'
});
connection.connect((err) => {
    if (err) {
        console.error('数据库连接发生错误', err);
    } else {
        console.log('连接成功!');
    }
});
module.exports = connection;
