/*🚀 Exercício 4
Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo. */

// const { log } = require("console");

const angle1 = -10;
const angle2 = 45;
const angle3 = 90;

const sumAngle = angle1 + angle2 + angle3;
const anglePositive = angle1 > 0 && angle2 > 0 && angle3 > 0;

if (anglePositive) {
    sumAngle === 180 ? console.log(true) : console.log(false);
} else {
    console.log("Algum ângulo é negativo");
}
