// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

const { name, description: {specieName}, homeWorld: { name: planetName }} = character;
console.log(`${name} / ${specieName} / ${planetName}`);