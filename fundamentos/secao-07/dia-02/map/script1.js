const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const newPersons = persons.map((people) => `${people.firstName} ${people.lastName}`);

console.log(newPersons);
