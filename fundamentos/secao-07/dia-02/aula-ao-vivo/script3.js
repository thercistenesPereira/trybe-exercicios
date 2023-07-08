const estadosBrasileiros = [
  {
    estado: "Acre",
    capital: "Rio Branco",
    regiao: "Norte"
  },
  {
    estado: "Alagoas",
    capital: "Maceió",
    regiao: "Nordeste"
  },
  {
    estado: "Amapá",
    capital: "Macapá",
    regiao: "Norte"
  },
  {
    estado: "Amazonas",
    capital: "Manaus",
    regiao: "Norte"
  },
  {
    estado: "Bahia",
    capital: "Salvador",
    regiao: "Nordeste"
  },
  // ...continua para os outros estados brasileiros
];

const citiesAndStates = (cities)=> cities.map((city) => `${city.capital} - ${city.estado}`);


console.log(citiesAndStates(estadosBrasileiros));
