/*Desafio dos asteriscos
Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo: */

const number = 5;
const simbol = '*';
let inputLine = '';

for (let index = 0; index < number; index += 1) {
    inputLine += simbol;
}

for (let index = 0; index < number; index += 1) {
    console.log(inputLine);
}