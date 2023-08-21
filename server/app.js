const express = require('express')
const cors = require('cors')
const app = express()
const path = require("path");
const dotenv = require('dotenv')

const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

dotenv.config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
})

app.use(cors())
// 解析 JSON 格式的请求体
app.use(express.json());
// 解析 URL 编码格式的请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/v1', adminRouter);

const host = process.env.BACKEND_HOST || 'localhost'
const port = process.env.BACKEND_PORT || 3000

app.listen(port, () => {
    console.log(`Server started on port http://${host}:${port}`);
});

