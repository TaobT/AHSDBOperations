module.exports = mongoose => {
    const inputdata = mongoose.model(
      "InputData",
      mongoose.Schema(
        {
            ID_Local: String,
            Fecha: Date,
            UrlImagen: String
        },
        {
          collection: 'InputData'
        }
      )
    );
    return inputdata;
  };