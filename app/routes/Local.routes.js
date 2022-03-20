module.exports = app => {
    const local = require("../controllers/Local.controller");
    var router = require("express").Router();
    router.post("/", local.create);
    app.use('/api/local', router);
};