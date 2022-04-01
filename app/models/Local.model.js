module.exports = mongoose => {
    const local = mongoose.model(
      "Local",
      mongoose.Schema(
        {
            Nombre_Local: String,
            Direccion: String,
            Propietario: String,
            Aforo_Max: Number
        },
        {
          collection: 'Locales'
        }
      )
    );
    return local;
  };