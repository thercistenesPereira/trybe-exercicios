const { cities } = require('./data');

//Encontre todas as cidades da região nordeste.

const filterCities = (cities) => {
  return cities.filter((city) => city.region === 'NE');
}

console.log(filterCities(cities));