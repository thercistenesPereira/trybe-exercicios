const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

const cities = [
  { state: 'AM', name: 'Manaus', region: 'N'},
  { state: 'PA', name: 'Belém', region: 'N'},
  { state: 'TO', name: 'Porto Nacional', region: 'N'},
  { state: 'MG', name: 'Nepomuceno', region: 'SE'},
  { state: 'BA', name: 'Cachoeira', region: 'NE'},
  { state: 'PR', name: 'Curitiba', region: 'S'},
  { state: 'SP', name: 'Hortolândia', region: 'SE'},
  { state: 'RN', name: 'Touros', region: 'NE'},
  { state: 'CE', name: 'Jericoacoara', region: 'NE'},
  { state: 'TO', name: 'Três Pedras', region: 'N'},
  { state: 'MG', name: 'João Pinheiro', region: 'SE'}
];

module.exports = { users, cities };