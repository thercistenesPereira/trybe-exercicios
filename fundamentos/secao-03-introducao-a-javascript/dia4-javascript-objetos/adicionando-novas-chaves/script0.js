let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  customer1.lastName = 'Faria';
  
  let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  customer2['lastName'] = 'Silva';

  console.table(customer1)
  console.table(customer2)
  