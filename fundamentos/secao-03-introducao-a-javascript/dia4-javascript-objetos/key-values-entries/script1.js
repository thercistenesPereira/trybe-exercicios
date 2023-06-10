// const { values } = require("prelude-ls");

const product = {
  name: 'Ruffles Original - 76g',
  price: 8.59,
  company: 'Elma Chips',
  nutritionInfo: {
    carbohydrates: 12,
    sugar: 0,
    sodium: 129,
  }
};

console.log(Object.values(product));