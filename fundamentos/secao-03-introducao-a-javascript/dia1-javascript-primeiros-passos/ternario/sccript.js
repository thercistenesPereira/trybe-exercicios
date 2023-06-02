/*🚀 Para fixar
Criar estruturas condicionais com operadores if/else e operadores lógicos será muito comum em sua carreira de pessoa desenvolvedora. Então, vamos praticar essa habilidade!

Crie uma variável chamada grade que receba a nota de uma pessoa candidata em um desafio técnico e atribua um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se está na lista de espera. Para isso, considere estas informações.
Se grade for maior ou igual a 80, armazene na variável message: “Parabéns, você faz parte do grupo de pessoas aprovadas!”;
Se grade for menor que 80 e maior ou igual a 60, armazene na variável message: “Você está na nossa lista de espera.”;
Se grade for menor que 60, armazene na variável message: “Infelizmente, você reprovou.”.
➡️ Crie uma estrutura condicional utilizando if, else if e else para criar o seu algoritmo e os operadores lógicos que se aplicam a cada situação.
➡️ Altere o valor da nota para verificar se as condições que você implementou funcionam. */

const grade = 70;
const result = grade >= 80 ? `Parabéns, você faz parte do grupo de pessoas aprovadas!` : `Você está na nossa lista de espera.`;

console.log(result);
