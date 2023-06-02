/*Desafio fatorial
O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

O fatorial é representado pelo sinal !
Exemplo de 4 fatorial:
4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10. */

const calculateFatorial = (n) => {
    if (n === 1 || n === 0) {
        return 1;
    }

    let result = 1;

    for (let index = n; index > 0; index -= 1) {
        result *= index
    }
    console.log(result);
}

calculateFatorial(5);