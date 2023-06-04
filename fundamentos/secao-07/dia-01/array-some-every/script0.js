const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verifyCargo = pessoas.some((pessoa) => pessoa.cargo === 'programador');

console.log(verifyCargo);