let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
console.table(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.table(conta[infoDoBanco]['nome']); // TrybeBank
console.table(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4
