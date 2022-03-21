module.exports = app => {
    const imageUpload = require("../controllers/ImageUpload.controller");
    var router = require("express").Router();
    router.post("/", imageUpload.upload);
    app.use('/api/imageUpload', router);
};