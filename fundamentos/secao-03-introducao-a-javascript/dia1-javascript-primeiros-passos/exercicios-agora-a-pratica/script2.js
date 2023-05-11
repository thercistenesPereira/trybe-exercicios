// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
const num1 = 5
const num2 = 3
const num3 = 8

if (num1 > num2 && num1 > num3) {
    console.log(`O maior número é ${num1}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`O maior número é ${num2}`);
} else if (num3 > num1 && num3 > num2) {
    console.log(`O maior número é ${num3}`);
} else {
    console.log(`Há igualdade entre alguns dos números`);
}
