// Primeira parte
const promo = [ //o array também é conhceido como matriz. Neste caso a variável promo recebe um array de objetos.
    { product: 'bola de beach tennis', price: 29.99 }, //Cada objeto do array recebe duas propriedades.
    { product: 'mochila de trilha 20 litros', price: 120.99 },
    { product: 'capacete de ciclista', price: 180.59 },
    { product: 'toalha compacta de secagem', price: 39.99 },
    { product: 'kit 5 camisetas Dry Fit', price: 99.99 },
    { product: 'caneleiras de peso - 3kg (par)', price: 44.99 },
    { product: 'bola de ginástica e pilates', price: 149.59 },
    { product: 'óculos de natação', price: 18.99 },
    { product: 'capa protetora de prancha de surf', price: 89.59 },
    { product: 'bola de basquete', price: 39.99 },
];

const btnEnviar = document.querySelector('#send-button'); // para acionar o botão ele foi capturado no DOM.
// Evento de click adcionado ao botão capturado.
btnEnviar.addEventListener('click', () => {
    const name = document.querySelector('#name-id').value;  //captura dentro do click o value do input text
    const number = document.querySelector('#number-id').value; //captura o valor do input number

    showPromo(name, number) //aqui será acionado esta função quando o evento de click for acionado.
})

const showPromo = (name, number) => {
    const firstText = document.querySelector('#text-initial');
    const secondText = document.querySelector('#text-final');

    try { //tenta executar o código com sucesso
        checkName(name);
        checkNumber(parseInt(number));
        checkValideRange(number)
        const productObject = checkPromo(number);

        firstText.innerHTML = `Boas-vindas, ${name}!`;
        secondText.innerHTML = `A promoção do dia é: 
        ${productObject.product} no valor de R$ ${productObject.price}`;
        } catch (err) { //executa aquilo que está em seu escopo
        secondText.innerHTML = err.message;
    }
}

// Segunda parte
const checkNumber = (number) => {
    if (isNaN(number)) { //"isNaN" verifica se o parâmetro 'number'.
      throw new Error('É necessário digitar um número'); //esta é a mesagem de erro
    }
  }

// Terceira parte
const checkPromo = (number) => {
    for (let index = 0; index < promo.length; index += 1) {
      if (number - 1 === index) {
        return promo[index];
      }
    }
  }

const checkValideRange = (number) => {
    if (number < 1 || number > 10) {
        throw new Error('É necessário digitar um núemro entre 1 e 10');
    }
};
