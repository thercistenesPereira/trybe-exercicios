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

// Queremos extrair o nome do personagem, a idade, o nome do planeta, e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log(). Para isso, vamos utilizar a desestruturação de objetos:

const {name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

console.log(`${name} ${age} ${planetName} ${jedi}`);