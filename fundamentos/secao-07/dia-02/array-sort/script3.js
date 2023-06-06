const gamers =  [
    {
      nome: "José",
      points: [42, 75, 86, 91, 13, 55, 27, 68, 99, 34]
    },
    {
      nome: "Maria",
      "points": [79, 52, 38, 87, 62, 44, 90, 21, 59, 81]
    },
    {
      nome: "João",
      pontos: [18, 97, 66, 29, 43, 85, 74, 11, 56, 32]
    },
    {
      nome: "Lucas",
      points: [63, 49, 82, 39, 71, 26, 88, 14, 96, 67]
    }
  ]

gamers.sort((a, b) => a.nome > b.nome ? 1 : -1);
console.log(gamers);