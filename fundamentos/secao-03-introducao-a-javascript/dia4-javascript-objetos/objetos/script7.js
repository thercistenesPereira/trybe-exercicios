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
addProperty(customer, 'email', 'thercistenes@gmail.com');
addProperty(customer, 'phone', 984376423);
addProperty(customer, 'userGithub', '@thercistenes');
addProperty(customer, 'instagram', 'thercistenes');

console.log(customer);