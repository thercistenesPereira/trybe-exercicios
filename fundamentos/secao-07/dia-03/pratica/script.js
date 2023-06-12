// Fonte: <https://restcountries.com/v2/all>
const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

//   const expectedResult = 120797034;
const getPopulation = () => countries.reduce((acc, country) => acc + country.population, 0);
getPopulation();

// 2 - Calcule a área total de todos os países.
// const expectedResult = 4311757;
const getTotalArea = () => countries.reduce((acc, country) => acc + country.area, 0);
console.log(getTotalArea());

// 🚀 3 - Encontre o país com o maior nome.
// De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.
const longestName = () => countries.reduce((acc, nextCountry) => acc.name.length < nextCountry.name.length ? nextCountry : acc);
longestName();

// 🚀 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.
// De olho na dica 👀: faça com que o array de nomes seja um array de letras.

