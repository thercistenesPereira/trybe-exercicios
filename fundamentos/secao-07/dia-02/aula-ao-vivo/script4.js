const states = [
  { short: "PA", name: "Pará" },
  { short: "TO", name: "Tocantins" },
  { short: "MG", name: "Minas Gerais" },
  { short: "AM", name: "Amazonas" },
  { short: "BA", name: "Bahia" },
  { short: "PR", name: "Paraná" },
  { short: "SP", name: "São Paulo" },
  { short: "RN", name: "Rio Grande do Norte" },
  { short: "CE", name: "Ceará" }
];

const regions = [
  { short: "N", name: "Norte" },
  { short: "NE", name: "Nordeste" },
  { short: "CW", name: "Centroeste" },
  { short: "SE", name: "Sudeste" },
  { short: "S", name: "Sul" },
];

const cities = [
  { state: "AM", name: "Manaus", region: "N" },
  { state: "PA", name: "Belém", region: "N" },
  { state: "TO", name: "Porto Nacional", region: "N" },
  { state: "MG", name: "Lavras", region: "SE" },
  { state: "BA", name: "Feira de Santana", region: "NE" },
  { state: "PR", name: "Cascavel", region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

//Retorne algo neste formato:
//[
// { satate: 'Amazonas', name: 'Manaus', region: 'Nordeste'}
// ]

const arrayCities = (cities) => {
  return cities.map((city) => {
    const findStates = states.find((state) => state.short === city.state) 
    const findRegions = regions.find((region) => region.short === city.region)
    return {
      states: findStates.name,
      city: `${city.name}`,
      region: findRegions.name
    }
  })
}

console.log(arrayCities(cities));
