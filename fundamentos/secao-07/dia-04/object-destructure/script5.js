const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

const [firstNumber, secondNumber, thirdNumber] = primeNumbers;
console.log(sum(firstNumber, thirdNumber));


// Produza o mesmo resultado acima, porém utilizando array destructuring
