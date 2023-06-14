const getSpeciesByIds = (...ids) => {
    // A notação (...ids = []) não seria pra caso não houver nenhum parâmetro?
    const { species } = data;
    // return (!ids) ? [] : ids;
    if (!ids) {
      return [];
    }
    return species.filter((specie) => ids.some((id) => id === specie.id));
  };
  //  Porque o log não reconhece a const lionId, que o Id '0938aa23-f153-4937-9f88-4858b24d6bce' está guardado nela?
  console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));