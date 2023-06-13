const getNationality = ({ firstName, nationality  = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(person));
console.log(getNationality(otherPerson));
// Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.