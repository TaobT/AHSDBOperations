const db = require("../models");
const AHyS = db.ahys;

//Create
exports.create = (req, res) => {
    // Validate request
    if (!req.body.ID_DatosEntrada) {
      res.status(400).send({ message: "El contenido no puede estar vacio!" });
      return;
    }
    // Crear AHyS
    const ahys = new AHyS({
        ID_DatosEntrada: req.body.ID_DatosEntrada,
        ID_Lugar: req.body.ID_Lugar,
        Nombre_Lugar: req.body.Nombre_Lugar,
        Direccion: req.body.Direccion,
        Fecha: req.body.Fecha,
        CantidadPersonas: req.body.CantidadPersonas
    });
    // Guardar AHyS en la base de datos
    ahys
      .save(ahys)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ah ocurrido un error mientras se creaba un AHyS."
        });
      });
  };


exports.findAll = (req, res) => {
    AHyS.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Un error ocurrio al buscar AHyS."
        });
      });
};

exports.findByDir = (req, res) =>{
    const direction = req.query.Direccion;
    AHyS.find({Direccion: { $regex: direction, $options: "i" }})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Un error ocurrio al buscar AHyS por dirección."
            });
        });
};

exports.findByDate = (req, res) =>{
    AHyS.find({Fecha: req.query.Fecha})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Un error ocurrio al buscar AHyS por fecha."
            });
        });
};