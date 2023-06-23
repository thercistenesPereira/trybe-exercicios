const primeiroNumero = 9;
const segundoNumero = 3;

let operaNumeros = primeiroNumero + segundoNumero;
console.log(operaNumeros);

setTimeout(() => {
    console.log(primeiroNumero * segundoNumero);
}, 2000)

operaNumeros = primeiroNumero - segundoNumero;
console.log(operaNumeros);
