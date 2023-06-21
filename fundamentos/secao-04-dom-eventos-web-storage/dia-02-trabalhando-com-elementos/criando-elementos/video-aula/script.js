const ingredientesFeijoada = [
  "Feijão preto",
  "Carne de porco (costelinha, lombo, pé, orelha)",
  "Paio",
  "Linguiça calabresa",
  "Bacon",
  "Cebola",
  "Alho",
  "Folha de louro",
  "Pimentão verde",
  "Tomate",
  "Molho de tomate",
  "Azeite de oliva",
  "Sal",
  "Pimenta-do-reino",
  "Cominho",
  "Colorau",
  "Água",
  "Farinha de mandioca",
  "Couve",
  "Laranja"
];

const ingredientsList = document.querySelector('#ingredientsList');

for (let index = 0; index < ingredientesFeijoada.length; index += 1) {
  let ingredient = ingredientesFeijoada[index];

  let ingredientListItem = document.createElement('li');
  ingredientListItem.innerText = ingredient;

  ingredientsList.appendChild(ingredientListItem);
}