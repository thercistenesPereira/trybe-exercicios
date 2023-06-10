const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
  if (typeof object[key] === 'undefined') {
    object[key] = value;
  }
}

addProperty(customer, 'lastName', 'Silva');

console.log(customer);