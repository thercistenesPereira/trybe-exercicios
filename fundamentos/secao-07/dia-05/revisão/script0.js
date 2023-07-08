// Crie uma arrow function que receba um array de números como parâmetro e retorne a soma de todos os elementos.

const somaArray = (array) => array.reduce((acc, curr) => acc + curr, 0)

console.log(somaArray([1, 2, 3]));