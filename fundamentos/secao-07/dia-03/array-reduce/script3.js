const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sum = (accumulator, number) => (number % 2 === 0) ? accumulator + number : accumulator;

const number = (array) => array.reduce(sum, 0);

console.log(number(numbers));
