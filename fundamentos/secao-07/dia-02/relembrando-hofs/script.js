const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

pessoas.forEach((pessoa) => console.log(pessoa.idade));
console.log(pessoas.find((pessoa) => pessoa.nome === 'Joana'));
console.log(pessoas.some((pessoa) => pessoa.idade > 30));
console.log(pessoas.every((pessoa) => pessoa.idade > 20));
console.log(pessoas.sort((a, b) => a.idade - b.idade ));
console.log(pessoas.map((pessoa) => pessoa.nome));



