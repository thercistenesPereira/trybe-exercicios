const people = ['maria', 'aristeu', 'edmilson', 'marina', 'osvaldo']

const newPeople = people.map((person) =>  {
  const employeeRecord = {};
  employeeRecord.name = person.charAt(0).toUpperCase() + person.slice(1).toLowerCase();
  employeeRecord.corporation = 'Trybe';
  return employeeRecord;
});

console.log(newPeople);