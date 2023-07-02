function sum(param1: number, param2: number) {
  return param1 + param2;
}

function retutnNumber(): number {
  return 2
}

function returnString(): string {
  return 'Olá mundo';
}

function noReturn(): void {

}

let arrayOfString: string[]; // armazena um array de string.
let arrayOfNumbres: number[] // array armazena numeros;
let arrayOfNumbresOrAndString: (string | number)[] // Armazena array e/ou string
let arrayObject: object[] // Array que retorna objeto.

// Declarando um objeto 
let person: {name: string, age: number}

function greeting(person: { name: string, lastname: string }) {
  return `Hello ${person.name} ${person.lastname}`;
}
console.log(greeting({ name: 'Thercístenes', lastname: 'Pereira'}));
