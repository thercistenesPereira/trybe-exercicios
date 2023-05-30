const harryPotterMovies = {
    "filmes": [
      {
        "titulo": "Harry Potter e a Pedra Filosofal",
        "ano_lancamento": 2001,
        "atores_principais": [
          "Daniel Radcliffe",
          "Rupert Grint",
          "Emma Watson"
        ]
      },
      {
        "titulo": "Harry Potter e a Câmara Secreta",
        "ano_lancamento": 2002,
        "atores_principais": [
          "Daniel Radcliffe",
          "Rupert Grint",
          "Emma Watson"
        ]
      },
      {
        "titulo": "Harry Potter e o Prisioneiro de Azkaban",
        "ano_lancamento": 2004,
        "atores_principais": [
          "Daniel Radcliffe",
          "Rupert Grint",
          "Emma Watson"
        ]
      },
      {
        "titulo": "Harry Potter e o Cálice de Fogo",
        "ano_lancamento": 2005,
        "atores_principais": [
          "Daniel Radcliffe",
          "Rupert Grint",
          "Emma Watson"
        ]
      },
      {
        "titulo": "Harry Potter e a Ordem da Fênix",
        "ano_lancamento": 2007,
        "atores_principais": [
          "Daniel Radcliffe",
          "Rupert Grint",
          "Emma Watson"
        ]
      },
      {
        "titulo": "Harry Potter e o Enigma do Príncipe",
        "ano_lancamento": 2009,
        "atores_principais": [
          "Daniel Radcliffe",
          "Rupert Grint",
          "Emma Watson"
        ]
      },
      {
        "titulo": "Harry Potter e as Relíquias da Morte: Parte 1",
        "ano_lancamento": 2010,
        "atores_principais": [
          "Daniel Radcliffe",
          "Rupert Grint",
          "Emma Watson"
        ]
      },
      {
        "titulo": "Harry Potter e as Relíquias da Morte: Parte 2",
        "ano_lancamento": 2011,
        "atores_principais": [
          "Daniel Radcliffe",
          "Rupert Grint",
          "Emma Watson"
        ]
      }
    ]
  }

const getHarryPotterMovies = (year) => {
    document.querySelector('#result');

    if(isNaN(parseInt(year))) {
        throw new Error ('Valor inesperado. Insira um número!');
    }
    
    for(let index = 0; index < harryPotterMovies.filmes.length; index += 10) {
        if(harryPotterMovies.filmes[index].ano_lancamento === parseInt(year)) {
            return harryPotterMovies.filmes[index]['titulo'];
        } else {
            throw new Error (`No ano ${year} não foi lançado filmes do Harry Potter`);
        }
    }
};

const addHarryPotterMovie = () => {
    
}