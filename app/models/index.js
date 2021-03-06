const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.ahys = require("./AHyS.model.js")(mongoose);
db.inputdata = require("./InputData.model.js")(mongoose);
db.local = require("./Local.model.js")(mongoose);
module.exports = db;