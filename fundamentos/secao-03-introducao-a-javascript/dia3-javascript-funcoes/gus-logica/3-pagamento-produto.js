const preco = 1000;
const precoAvista = preco - (preco * 10 / 100);
const precoParcela = preco / 3;

console.log(`Preço: ${preco}`);
console.log(`À vista: ${precoAvista}`);
console.log(`Ou 3x de: ${precoParcela.toFixed(2)}`);
