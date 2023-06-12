//Carrinho de compras
//Total a pagar

const item  = [
    { descriptrion:  'pen', quantity: 1, price: 3} ,
    { descriptrion: 'rule', quantity: 2, price: 5},
    { descriptrion: 'erase', quantity: 2, price: 6}
]

const total = item.reduce((acumulador, itemAtual) => acumulador + (itemAtual .price * itemAtual.quantity), 0);

console.log(total);