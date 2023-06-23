// Crie um irmão para elementoOndeVoceEsta.
const elementPai = document.querySelector('#pai');

const sectionIrmao = document.createElement('section');
sectionIrmao.id = 'irmaoElementoOndeVoceEsta';
sectionIrmao.innerText = 'Crie um irmão para elementoOndeVoceEsta.';
elementPai.appendChild(sectionIrmao);

// Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
const filhoOndeVoceEsta = document.createElement('div');
filhoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
filhoOndeVoceEsta.innerText = 'Crie um filho para elementoOndeVoceEsta.';
elementoOndeVoceEsta.appendChild(filhoOndeVoceEsta);


// Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
const filhoPrimeiroFilhoDoFilho = document.createElement('div');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
filhoPrimeiroFilhoDoFilho.innerText = 'Crie um filho para primeiroFilhoDoFilho.';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

