// Mostra somente os números ímpares

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbersImpares = numbers.filter((number) => number % 2 !== 0);

console.log(numbersImpares);