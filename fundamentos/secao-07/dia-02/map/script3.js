const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProduct, listPrice) => listProduct.map((product, index) => ({ [product]: listPrice[index] }));

console.log(updateProducts(products, prices));


