const employees = [
  { id: 1, nome: 'Douglas Adams', idade: 20},
  { id: 2, nome: 'H. G. Wells', idade: 18},
  { id: 3, nome: 'Júlio Verne', idade: 57},
  { id: 4, nome: 'Margaret Atwood', idade: 83},
  { id: 5, nome: 'Edgar Allan Poe', idade: 19},
];

console.log(employees.find((employee) => employee.nome=== 'Margaret Atwood').id); 
