const pessoas = [
    {Nome: 'Daniel', Idade: 28}, 
    {Nome: 'Maria', Idade: 29},
    {Nome: 'Marta', Idade: 29}
]

const porIdade = pessoas.reduce((pessoasIdade, pessoaAtual) => {
    pessoasIdade[pessoaAtual.Idade] = pessoasIdade[pessoaAtual.Idade] || [];
    pessoasIdade[pessoaAtual.Idade].push(pessoaAtual.Nome);
    return pessoasIdade
}, {});

console.log(porIdade);
