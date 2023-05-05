let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  customer1.lastName = 'Faria';
  console.log(customer1);
  
  let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
  };
  
  console.table(customer2);
  customer2['lastName'] = 'Silva';
  console.table(customer2);
