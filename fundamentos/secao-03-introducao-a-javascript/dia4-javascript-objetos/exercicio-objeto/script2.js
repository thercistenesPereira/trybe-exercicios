// const { forEach } = require("lodash");

const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  // Crie uma função que obtenha o valor da chave de acordo com sua posição no array.
const getPositionArray = (object, index) => Object.values(object[index]);
getPositionArray(school.lessons, 0);

// Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
const somaTotalEstudantes = (object) => {
  let totalEstudantes = 0;

  object.lessons.forEach((estudantes) => {
    if (estudantes.students) {
      totalEstudantes += estudantes.students;
    }
  });
  return totalEstudantes;
};
somaTotalEstudantes(school);

// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
const verificaChave = (objeto, chave) => {
  for (let index = 0;  index < objeto.lessons.length; index += 1) {
    if (objeto.lessons[index][chave] === undefined) {
      return false;
    }
  }
  return true;
}
verificaChave(school, 'students');

// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
const alteraTurno = (baseDados, course, value) => {
  let findCourse;

  for (let index = 0; index < baseDados.lessons.length; index += 1) {
    let element = baseDados.lessons[index];
    if (element.course === course) {
      findCourse = element;
      break;
    }
  }
  if (findCourse !==undefined) {
    findCourse.shift = value;
    return findCourse;
  } else {
    return 'curso não encontrado';
  }
};
console.log(alteraTurno(school,  'Python', 'Noite'));