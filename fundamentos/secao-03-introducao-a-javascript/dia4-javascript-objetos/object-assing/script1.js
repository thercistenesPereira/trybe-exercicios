let person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  let info = {
    age: 23,
    job: 'engenheiro',
  };
  
  let family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
Object.assign(person, info, family)
console.log(person)