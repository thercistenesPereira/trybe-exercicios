// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:

const greet = (name, msg = 'Hi, ') => `${msg} ${name}`;

console.log(greet('Maria'));
