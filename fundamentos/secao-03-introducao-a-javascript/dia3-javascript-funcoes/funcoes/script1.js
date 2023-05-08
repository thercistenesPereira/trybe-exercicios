//Desenvolva cada exercício a seguir com o uso de funções.

// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.


let saldo = 100
function adicionaValor(valor) {
    return saldo + valor
}
function subtraiValor(valor) {
    return saldo - valor
}
function multiplicaValor(valor) {
    return saldo * valor
}
function divideValor(valor) {
    return saldo / valor
}
console.table(`Valor: ${adicionaValor(100)}`)
console.table(`Valor: ${subtraiValor(100)}`)
console.table(`Valor: ${multiplicaValor(100)}`)
console.table(`Valor: ${divideValor(100)}`)
