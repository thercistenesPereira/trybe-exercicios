'use strict'

let num1 = 0
let num2 = 2
let num3 = 6

if(num1 > num2 && num1 > num3){
    console.log(`${num1} é o maior número`);
} else if(num2 > num1 && num2 > num3) {
    console.log(`${num2} é o maior número`);
} else if(num3 > num1 && num3 > num2) {
    console.log(`${num3} é o maior número`);
} else {
    console.log('Há algo inconsistente nos valores');
}
