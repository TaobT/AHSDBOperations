const db = require("../models");
const Local = db.local;

//Create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Nombre_Local || !req.body.Direccion) {
      res.status(400).send({ message: "El contenido no puede estar vacio!" });
      return;
    }
    // Crear AHyS
    const local = new Local({
      Nombre_Local: req.body.Nombre_Local,
      Direccion: req.body.Direccion
    });
    // Guardar AHyS en la base de datos
    local
      .save(local)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ah ocurrido un error mientras se creaba el Local."
        });
      });
  };