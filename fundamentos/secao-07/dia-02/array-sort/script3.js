const gamers =  [
    {
      nome: "José",
      points: [42, 75, 86, 91, 13, 55, 27, 68, 99, 34]
    },
    {
      nome: "Maria",
      points: [79, 52, 38, 87, 62, 44, 90, 21, 59, 81]
    },
    {
      nome: "João",
      points: [18, 97, 66, 29, 43, 85, 74, 11, 56, 32]
    },
    {
      nome: "Lucas",
      points: [63, 49, 82, 39, 71, 26, 88, 14, 96, 67]
    }
  ]

gamers.sort((a, b) => {
  let pointsA = 0;
  let pointsB = 0;

  a.points.forEach((point) => pointsA += point);
  b.points.forEach((point) => pointsB += point);

  return pointsA - pointsB;
});

console.log(gamers);
