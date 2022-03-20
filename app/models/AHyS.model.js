module.exports = mongoose => {
    const ahys = mongoose.model(
      "AHyS",
      mongoose.Schema(
        {
          ID_DatosEntrada: String,
          ID_Lugar: String,
          Nombre_Lugar: String,
          Direccion: String,
          Fecha: Date,
          CantidadPersonas: Number,
          UrlImage: String
        },
        {
          collection: 'AHyS'
        }
      )
    );
    return ahys;
  };