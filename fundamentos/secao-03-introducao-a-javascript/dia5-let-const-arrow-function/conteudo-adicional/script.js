const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map((material) => material.length));
// O map está iterando sobre cada elemento do array, representado por "material";
// "material.length" é o tamannho de de caractere em cada elemento do array;
// O retorno significa o seguinte:
// 'Hydrogen' Possui 8 caracters, e faz isso para cada um dos elementos so array
