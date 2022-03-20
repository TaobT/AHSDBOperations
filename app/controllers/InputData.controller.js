const db = require("../models");
const InputData = db.inputdata;

//Create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.ID_Local || !req.body.Fecha || !req.body.UrlImagen) {
      res.status(400).send({ message: "El contenido no puede estar vacio!" });
      return;
    }
    // Crear AHyS
    const inputdata = new InputData({
      ID_Local: req.body.ID_Local,
      Fecha: req.body.Fecha,
      UrlImagen: req.body.UrlImagen
    });
    // Guardar AHyS en la base de datos
    inputdata
      .save(inputdata)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ah ocurrido un error mientras se creaba un Dato de Entrada."
        });
      });
  };