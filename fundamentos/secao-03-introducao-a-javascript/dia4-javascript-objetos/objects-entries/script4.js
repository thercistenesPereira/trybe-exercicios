// Para fixar
// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar?

// Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer (do exemplo anterior), chamando a função addProperty.

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

// Criação da função
const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined"){
    object[key] = value;
  }
};

addProperty(customer, 'email','roberto@gmaill.com');
addProperty(customer, 'fone', '9895-2054');
addProperty(customer, 'linkedin', '@roberto')

console.log(customer);
