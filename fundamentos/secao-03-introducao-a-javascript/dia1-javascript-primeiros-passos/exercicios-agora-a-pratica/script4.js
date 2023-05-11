// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const angulo1 = 0
const angulo2 = 0
const angulo3 = 0

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
}else {
    console.log('ERRO! ângulo inválido');
}
