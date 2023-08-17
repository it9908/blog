const multer = require('multer');

// 设置存储引擎和上传目录
const storage = multer.diskStorage({
    destination: './public/images', // 统一存放目录
    filename: function (req, file, cb) {
        // 生成一个随机的时间戳作为文件名前缀
        const timestamp = new Date().getTime();
        const originalname = file.originalname;
        const filename = `${timestamp}_${originalname}`;
        cb(null, filename);
    }
});

// 创建 Multer 实例，配置存储引擎和其他选项
const uploadMiddleware = multer({ storage }).single('file');

module.exports = uploadMiddleware;

