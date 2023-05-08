
let order = {
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
  //Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
  function customerInfo(order) {
  // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson
    const name = order.name
    const phoneNumber = order.phoneNumber

    const street = order.address.street 
    const number = order.address.number
    const apartment = order.address.apartment

    const address = `R. ${street}, N°: ${number}, AP: ${apartment}`

    const messageDeliveryPerson = `Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${address}`


    return messageDeliveryPerson
  }

  console.log(customerInfo(order));
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    // Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
    // Modifique o nome da pessoa compradora para Luiz Silva;
    // Modifique o valor total da compra para R$ 50,00.
    order.name = 'Luiz Silva'
    order.payment.total = 50

    const name = order.name

    const pizzas = Object.keys(order.order.pizza)
    const pizzaMarguerita = pizzas[0]
    const pizzaPeperoni = pizzas[1]

    const cocaCola = order.order.drinks.coke.type

    const paymentTotal = order.payment.total

    const messageName = `Olá, ${name}, o valor total de seu pedido de ${pizzaMarguerita}, ${pizzaPeperoni} e ${cocaCola}, é R$ ${paymentTotal},00.`


    return messageName
  }
  
  console.log(orderModifier(order))
