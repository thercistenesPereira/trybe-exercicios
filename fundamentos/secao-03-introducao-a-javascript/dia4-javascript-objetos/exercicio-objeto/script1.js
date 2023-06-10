const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const donaRestaurante = fullOrder.order.delivery.deliveryPerson;
  const cliente = fullOrder.name;
  const tel = fullOrder.phoneNumber;
  const endereco = fullOrder.address.street;
  const numero = fullOrder.address.number;
  const apartamento = fullOrder.address.apartment;

  return `Olá, ${donaRestaurante}, entrega para: ${cliente}, Telefone: ${tel}, ${endereco}, Número: ${numero}, AP: ${apartamento}`;
}

customerInfo(order);

const orderModifier = (fullOrder) => {
  fullOrder.name = 'Luiz Silva'; 
  fullOrder.payment.total = 50; 

  const pizzas= Object.keys(fullOrder.order.pizza).join(', ');
  return `Olá ${fullOrder.name }, o valor  total do seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$ ${fullOrder.payment.total},00.`;
}

console.log(orderModifier(order));