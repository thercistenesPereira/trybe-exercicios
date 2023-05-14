'use strict'

// Arquivo script.js

// Cria um novo elemento <li> e o armazena na variável newElement
let newElement = document.createElement('li');

// Acessa o novo elemento armazenado em newElement e altera seu conteúdo
newElement.innerText = 'Conteúdo alterado!';
newElement.style.color = 'blue'

// Recupera o elemento que será o pai de newElement e o armazena na variável parent
let parent = document.querySelector('#parent');

// Insere o novo elemento como filho de parent
parent.appendChild(newElement);
