//2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

// const books = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco'
// }

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prosineiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco'
})
console.log(leitor)
