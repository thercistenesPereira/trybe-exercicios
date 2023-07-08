const items = [
  { name: 'João', age: 42 },
  { name: 'Maria', age: 19 },
  { name: 'Carlos', age: 76 },
  { name: 'Ana', age: 53 }
]

items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

console.log(items);
