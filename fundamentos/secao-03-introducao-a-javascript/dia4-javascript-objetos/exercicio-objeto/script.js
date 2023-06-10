const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

const nome = reader.name;
const sobreNome = reader.lastName;
const livroFavorito = reader.favoriteBooks[0].title;

(`O livro favorito de ${nome} ${sobreNome} se chama ${livroFavorito}`);

reader.favoriteBooks.push({title: 'Harry Potter e o Prisioneiro de Azkaban', author: 'JK Rowling', publisher: 'Rocco'});

const numFavoriteBook = reader.favoriteBooks.length;

console.log(numFavoriteBook);