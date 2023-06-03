/*Exercício 3
Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. */

const num1 = 3; 
const num2 = 2;
const num3 = 1;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} é o maior número`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} é o maior número`);
} else {
    console.log(`${num3} é o maior número`);
}
