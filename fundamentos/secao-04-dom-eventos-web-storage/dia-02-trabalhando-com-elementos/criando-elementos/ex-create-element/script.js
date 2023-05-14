let ingredientsItens = [
'500g de feijão crioquinha cozido',
'200g de toucinho',
'concha de óleo',
'cebola média picada',
'dentes de alho',
'ovos',
'1 colher de sopa de sal com alho',
'Cheiro verde a gosto',
'200g de farinha de mandioca'
];

const ingredientList = document.querySelector('.ingredient-list');

for (let index = 0; index < ingredientsItens.length; index += 1) {
    let ingredient = ingredientsItens[index];

    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient;

    ingredientList.appendChild(ingredientListItem)
    // console.log(ingredientListItem);
}

