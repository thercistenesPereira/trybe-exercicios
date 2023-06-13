// Faça uma lista com as suas frutas favoritas
const specialFruit = ['', '', ''];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['', '', ''];

const fruitSalad = (fruit, additional) => {
  const newElement = [...fruit, ...additional]
  return newElement;
};

console.log(fruitSalad(specialFruit, additionalItens));