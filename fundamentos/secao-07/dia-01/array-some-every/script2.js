// Imagine que você esteja responsável por criar um sistema de acesso para as pessoas colaboradas da empresa em que você trabalha. Para isso, precisa verificar se pelo menos uma dessas pessoas possui o cargo de gerência. Como você faria? 🤔

// As informações das pessoas estão dentro de um array de objetos conforme o exemplo abaixo:

const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verifyPessoas = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

console.log(verifyPessoas);
