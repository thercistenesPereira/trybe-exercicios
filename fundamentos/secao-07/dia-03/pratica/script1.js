const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
// const expectedResult = 20;
const countA = () => {
    const letterArray = names.join().split('');
    const count = letterArray.reduce((acc, current) => current.toLowerCase() === 'a' ? acc  + 1 : acc, 0);
    return count;
}
console.log(countA());
