localStorage.setItem('filme', 'The King Lion');
let recoveryLocalStorageString = localStorage.getItem('filme');

localStorage.setItem('number', 12);
let recoveryLocalStorageNumber = JSON.parse(localStorage.getItem('number'));


const favoriteMovie = {
    filme: 'Madagascar'
}
localStorage.setItem('object', JSON.stringify(favoriteMovie));
let recoveryLocalStorageObject = JSON.parse(localStorage.getItem('object'));
console.log(recoveryLocalStorageObject);
console.log(typeof recoveryLocalStorageObject);
