module.exports = app => {
    const ahys = require("../controllers/AHyS.controller");
    var router = require("express").Router();
    router.post("/", ahys.create);
    router.get("/", ahys.findAll);
    router.get("/dir", ahys.findByDir);
    router.get("/date", ahys.findByDate);
    app.use('/api/ahys', router);
};