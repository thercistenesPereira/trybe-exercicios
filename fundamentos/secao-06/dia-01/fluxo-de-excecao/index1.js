// Para praticar, considere o exemplo de um boletim escolar
// Implemente uma lógica que verifique a média da pessoa estudante. Para isso, considere as seguintes informações:
// Escreva uma função que receba, como parâmetro, 4 valores do tipo number. Caso o valor recebido como parâmetro não seja do tipo number, lance uma exceção.
// Lembre-se de quebrar problemas grandes em partes menores, a fim de facilitar sua manutenção e seu entendimento.
// De olho na dica 👀: Aproveite para colocar em prática o uso do throw e try/catch.

// 1. Crie uma função que fará a validação dos números. 
// 2. Verifique se alguns do parâmetros é uma string, e caso seja, retorne um mensagem informando que o tipo de parâmetro deve ser numerico
// Quarto passo: Dentro da função, crie uma variável para receber a soma das notas e uma variável para receber o cálculo da média. O retorno da função será a média. Fazendo uso do console, você observará que a média já está sendo retornada.

const validateNumbers = (n1, n2, n3, n4) => {
    if(typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
        throw new Error('Atenção! Insira apenas números!')
    }
};

const calculateAverage = (n1, n2, n3, n4) => {
    try {
        validateNumbers(n1, n2, n3, n4);
        let sum = n1 + n2 + n3 + n4;
        let media = sum / 4;
        return media;
    }
    catch (error){
        return error.message;
    }
}

console.log(calculateAverage('oi', 5, 6, 7));
