// Exercício 1
// Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].
const myList = [5, 2, 3];
const swap = ([a, b, c]) => ([c, b, a]);

// Exercício 2
// Suponha que você esteja trabalhando em projeto de um site de carros, onde cada carro é representado dentro de um array. Então sua liderança pede que seja mudado o formato de array para objeto. Para isso, crie uma função chamada toObject que, dada uma lista, retorna um objeto representando o carro:
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, marca, ano]) => ({name, marca, ano})

// Exercício 3
// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:
const greet = (string1, string2 = 'Hi ') => (`${string2} ${string1}`);

// Escreva uma função getLastName que receba como parâmetro um objeto contendo informações de uma pessoa. Essa função deve retornar a propriedade lastName para o objeto passado, porém, caso o objeto não tenha essa propriedade, a função deve retornar a mensagem lastName não preenchido.
// const student1 = {
//   name: `Claudia`,
//   lastName: `Farias`,
//   age: 23,
// }

// const student2 = {
//   name: `Vitor`,
//   age: 20,
// }
// const getLastName = (objectStudent) => {
//   const { lastName = 'lastName não preenchido'} = objectStudent;
//   return lastName;
// }

// Usando array destructuring, armazene cada nome presente na variável moreStudents em variáveis separadas:
const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const [ student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);