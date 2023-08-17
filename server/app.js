const express = require('express')
const cors = require('cors')
const app = express()
const path = require("path");

const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

app.use(cors())
// 解析 JSON 格式的请求体
app.use(express.json());
// 解析 URL 编码格式的请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/v1', adminRouter);

const host = 'localhost'
const port = 3000

app.listen(port, () => {
    console.log(`Server started on port http://${host}:${port}`);
});

