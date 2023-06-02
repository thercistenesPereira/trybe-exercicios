let frutas = [
    'maçã',
    'laranja',
    'banana',
    'uva',
    'morango',
    'abacaxi',
    'mamão',
    'melancia',
    'limão',
    'kiwi',
    'pera',
    'melão',
    'cereja',
    'abacate',
    'manga',
    'ameixa',
    'pêssego',
    'goiaba',
    'caqui',
    'tangerina'
  ];

  window.addEventListener('DOMContentLoaded', function() {
    const demo = document.querySelector('#demo');
    demo.innerHTML = frutas.toString();
  });
  