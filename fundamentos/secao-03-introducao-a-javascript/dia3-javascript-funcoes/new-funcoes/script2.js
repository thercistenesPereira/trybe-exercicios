/*Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso o parâmetro não seja do tipo string, imprimir a mensagem: “Todos os valores precisam ser strings.”. */
// const { add } = require("lodash");

 


const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

const addCustomers = (customers, newCustomers) => {
    for (let index = 0; index < newCustomers.length; index += 1) {
        if (typeof newCustomers[index] === 'string') {
            customers.push(newCustomers[index]);
        } else {
            return 'Todos os valores precisam ser strings.';
        }
    }
    return trybeBankCustomers;
}

console.log(addCustomers(trybeBankCustomers, ['Thercístenes', 'Antônio']));
