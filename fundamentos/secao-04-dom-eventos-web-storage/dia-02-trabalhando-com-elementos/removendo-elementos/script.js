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
    ingredientListItem.className = 'ingredient-list-item'

    ingredientList.appendChild(ingredientListItem)
}
const ingredientListItems = document.querySelectorAll('.ingredient-list-item');

for (let index = 0; index < ingredientListItems.length; index += 1) {
    let element = ingredientListItems[index];

    if (element.innerText.includes('ovos')) {
        ingredientList.removeChild(element)
    }
}
