const buttonSubmit = document.querySelector('button');
let inputNameUser = document.querySelector('#input-nome');
const nameUser = document.querySelector('#name-user');

const nameUserValue = (event) => {
    event.preventDefault()
    console.log(inputNameUser.value);
    nameUser.innerHTML = inputNameUser.value;
}
buttonSubmit.addEventListener('click', nameUserValue);
