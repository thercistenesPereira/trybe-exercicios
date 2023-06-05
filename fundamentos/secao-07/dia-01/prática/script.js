// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const newEmployees = (employeesGeneration) => {
  const employees = {
    id1:  employeesGeneration('Pedro Guerra'), 
    id2: employeesGeneration('Luiza Drumond'), 
    id3: employeesGeneration('Carla Paiva')
  }
  return employees;
};

const employeesGeneration = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_') ;
  return {fullName, email: `${email}@trybe.com`};
}

console.log(newEmployees(employeesGeneration));
