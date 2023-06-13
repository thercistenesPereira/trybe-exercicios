const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
};
const { nationality  = 'Brasilia'} = person;
console.log(nationality);