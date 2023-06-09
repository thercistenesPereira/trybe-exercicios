const pessoas = [
  { nome: "João", nota: 85 },
  { nome: "Maria", nota: 92 },
  { nome: "Pedro", nota: 70 },
  { nome: "Ana", nota: 78 }
];

const aprovados = pessoas.filter((pessoa) => pessoa.nota >= 80);
const nomeAprovados = aprovados.map((estudante) => estudante.nome);

console.log(nomeAprovados);