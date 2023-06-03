/*Desafio da pirâmide de asteriscos
Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: */

const number = 5;
const symbol = '*';
let line = '';

for (let index = 0; index < number; index += 1) {
    line = line + symbol;
    console.log(line);
}