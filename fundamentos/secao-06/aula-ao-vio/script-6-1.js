/* eslint-disable no-undef */
const harryPotterMovies = {
    "filmes": [
      {
        "título": "Harry Potter e a Pedra Filosofal",
        "ano_lançamento": 2001,
        "atores_principais": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
      },
      {
        "título": "Harry Potter e a Câmara Secreta",
        "ano_lançamento": 2002,
        "atores_principais": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
      },
      {
        "título": "Harry Potter e o Prisioneiro de Azkaban",
        "ano_lançamento": 2004,
        "atores_principais": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
      },
      {
        "título": "Harry Potter e o Cálice de Fogo",
        "ano_lançamento": 2005,
        "atores_principais": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
      },
      {
        "título": "Harry Potter e a Ordem da Fênix",
        "ano_lançamento": 2007,
        "atores_principais": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
      },
      {
        "título": "Harry Potter e o Enigma do Príncipe",
        "ano_lançamento": 2009,
        "atores_principais": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
      },
      {
        "título": "Harry Potter e as Relíquias da Morte - Parte 1",
        "ano_lançamento": 2010,
        "atores_principais": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
      },
      {
        "título": "Harry Potter e as Relíquias da Morte - Parte 2",
        "ano_lançamento": 2011,
        "atores_principais": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
      }
    ]
  }
  
  const getHarryPotterMovie = (year) => {
    document.querySelector('#result').innerHTML = '';
  
    if (isNaN(parseInt(year))) {
      throw new Error ('Valor inesperado. Insira um número.');
    }
  
    for (let index = 0; index < harryPotterMovies.filmes.length; index += 1) {
      if (harryPotterMovies.filmes[index].ano_lançamento === parseInt(year)) {
        return harryPotterMovies.filmes[index]['título'];
      } else {
        throw new Error (`No ano ${year} não foi lançado nenhum filme do Harry Potter`);
      }
    }
  }
  
  const addHarryPotterMovie = () => {
    try {
      const year = document.querySelector('#movie').value;
      const result = document.querySelector('#result');
      
      result.innerHTML = `No ano ${year} foi lançado o filme ${getHarryPotterMovie(year)}`;
      
    } catch (error) {
      result.innerHTML = error.message;
      
    } finally {
      document.querySelector('#movie').value = '';
    }
    
    // result.innerHTML = `No ano ${year} não foi lançado nenhum filme do Harry Potter`;
  
    
    //   document.querySelector('#movie').value = '';
  
  }
  
  window.onload = () => {
    const button = document.querySelector('#button');
  
    button.addEventListener('click', addHarryPotterMovie);
  }