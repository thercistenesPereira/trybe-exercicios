'use strict'

function xadrezMovimento(nomePeca) {
    const peca = nomePeca.toLowerCase()

    switch(peca) {
        case 'cavalo':
            return 'Movimento em L'
        case 'bispo':
            return 'Movimento em diagonal'
        case 'peão':
            return 'Movimento uma casa para frente na vertical'
        case 'torre':
            return 'Movimento horizontal no eixo X e Y'
        case 'rainha':
            return 'Movimento em horizontal e vertical para ambos os sentidos'
        case 'rei':
            return 'Movimento de uma casa em horizontal e vertical'
        default:
            return 'Peça '
    }
}
console.log(xadrezMovimento('peão'));