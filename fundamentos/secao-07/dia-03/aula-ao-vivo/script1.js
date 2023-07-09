const { users } = require('./data');

//lembre-se, toda a função deve ter um retorno!

const result = users.filter((user) => user.isDriver === false).map((user) => `${user.firstName} ${user.lastName}`)

const naoDirige = (users) => users.filter((user) => user.isDriver === false)
  .map((user) => `${user.firstName} ${user.lastName}`)


console.log(naoDirige(users));

