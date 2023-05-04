// Que tal praticar um pouco?

// Desenvolva cada exercício a seguir com o uso de funções.

// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionaClientes(cliente){
   if(typeof cliente === 'string') {
    clientesTrybeBank.push(cliente)
    return cliente + ' adicionado com sucesso'
   } else {
    return 'O parâmetro deve ser uma string'
   }
}
console.log(adicionaClientes(true))
console.log(adicionaClientes('Maria'))
console.log(clientesTrybeBank)
