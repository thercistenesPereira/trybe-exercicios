// \\ Crie um irmão para elementoOndeVoceEsta.
// \\ Crie um filho para elementoOndeVoceEsta.
// \\ Crie um filho para primeiroFilhoDoFilho.
// \\ A partir desse filho criado, acesse terceiroFilho.

const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')
const parent = document.querySelector('#pai');
const siblingElementoOndeVoceEsta = document.createElement('section');
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

siblingElementoOndeVoceEsta.innerText = 'Crie um irmão para elementoOndeVoceEsta';
parent.appendChild(siblingElementoOndeVoceEsta);

const filhoElemelementoOndeVoceEsta = document.createElement('section');
filhoElemelementoOndeVoceEsta.innerText = 'Crie um filho para elementoOndeVoceEsta.';
elementoOndeVoceEsta.appendChild(filhoElemelementoOndeVoceEsta);

const filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.innerText = 'Crie um filho para primeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling

console.log(terceiroFilho);

