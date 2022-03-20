module.exports = mongoose => {
    const local = mongoose.model(
      "Local",
      mongoose.Schema(
        {
            Nombre_Local: String,
            Direccion: String
        },
        {
          collection: 'Locales'
        }
      )
    );
    return local;
  };