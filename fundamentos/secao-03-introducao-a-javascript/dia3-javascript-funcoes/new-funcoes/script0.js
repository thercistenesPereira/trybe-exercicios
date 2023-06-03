const alunos = ['maria', 'joão', 'josé'];
const professores = ['suzana', 'maurício', 'sávio'];

function verificaPessoa (array, element) {
    return array.includes(element);
}

console.log(verificaPessoa(alunos, 'josé'));
console.log(verificaPessoa(professores, 'sávio'));
