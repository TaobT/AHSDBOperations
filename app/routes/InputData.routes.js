module.exports = app => {
    const inputdata = require("../controllers/InputData.controller");
    var router = require("express").Router();
    router.post("/", inputdata.create);
    app.use('/api/inputdata', router);
};