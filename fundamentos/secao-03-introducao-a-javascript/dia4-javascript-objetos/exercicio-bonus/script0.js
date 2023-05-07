let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function addNightShift(object, key, value) {
    object[key] = value
    return object
}
addNightShift(lesson2, 'turno', 'noite');
//  a sintaxe que funcionaria também: lesson2['turno'] = 'noite

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// o método Object.keys, vai retornar um array com as chaves do objeto
function listKeys(object) {
    const keys = Object.keys(object)
    return keys
}
listKeys(lesson1)

// 3. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValuesObject(object) {
    const values = Object.values(object)
    return values
}
listValuesObject(lesson1)

// 3. Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3})

//Se eu vou colocar objetos em um objeto vazio, eu tenho que indicar com a sintaxe {} os outros objetos.


//Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.
function getKeyValue(object, index) {
    let values = Object.values(object)
    return values[index]
    
}
function getArrayValues(obj) {
    let values = Object.values(obj)
    return values
}
console.log(getArrayValues(lesson1));
console.log(getKeyValue(lesson1, 1));
