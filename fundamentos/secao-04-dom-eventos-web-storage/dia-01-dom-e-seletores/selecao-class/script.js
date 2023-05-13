const piloto = document.getElementsByClassName('piloto-f1-atual');

for (let index = 0; index < piloto.length; index += 1) {
    piloto[index].innerText = 'Novo texto do parágrado';
}