/*Exercício 5
Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Exemplo: Bispo -> Diagonais.*/

const chessPiece = 'PeãO';

switch(chessPiece.toLowerCase()) {
    case 'peão':
        console.log(`A peça ${chessPiece} movimenta-se uma casa para frente.`);
        break;
    case 'torre':
        console.log(`A peça ${chessPiece} movimenta-se na horizontal e vertical.`);
        break;
    case 'bispo': 
        console.log(`A peça ${chessPiece} movimenta-se na diagonal.`);
        break;
    case 'cavalo':
        console.log(`A peça ${chessPiece} movimenta-se em "L"`);
        break;
    case 'rainha':
        console.log(`A peça ${chessPiece} movimenta-se na horizontal, vertical e diagonal.`);
        break
    case 'rei': 
        console.log(`A peça ${chessPiece} movimenta-se na horizontal, vertical e diagonal, mas somente uma casa por jogada.`);
        break;
    default:
        console.log(`${chessPiece} não é uma peça de xadrez.`);
        break;
}