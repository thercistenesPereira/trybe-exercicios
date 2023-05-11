// 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

const comparacao = ( number1, number2 ) => {
    if (number1 > number2) {
        return `O número ${number1} é maior que ${number2}`
    } else if (number1 < number2) {
        return `O número ${number1} é menor que ${number2}`
    } else {
        return `O número ${number1} e o número ${number2} são iguais`
    }
}
console.log(comparacao(3, 3))
