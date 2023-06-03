/*Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, imprimir a mensagem: “O parâmetro passado deve ser do tipo string”. */

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

// escreva aqui sua função
const addCustomer = (name) => {
    if (typeof name !== 'string') {
        return `O parâmetro passado deve ser do tipo string`;
    }
    return trybeBankCustomers.push(name);
}

console.log(addCustomer('Thercístenes'));
console.log(trybeBankCustomers);
