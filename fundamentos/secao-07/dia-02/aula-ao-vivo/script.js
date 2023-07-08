const frutis = [ 'banana', 'maça', 'laranja', 'tangerina', 'abacate'];

function comparar(a, b) {
  if (a < b) {
    return -1;
  } 
  if(a > b) {
    return 1
  }
  return 0;
}

frutis.sort(comparar)

console.log(frutis);
