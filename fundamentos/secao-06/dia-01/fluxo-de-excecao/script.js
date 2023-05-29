// Primeira parte
const promo = [ //o array também é conhceido como matriz. Neste caso a variável promo recebe um array de objetos.
    {product: 'bola de beach tennis', price: 29.99}, //Cada objeto do array recebe duas propriedades.
    {product: 'mochila de trilha 20 litros', price: 120.99},
    {product: 'capacete de ciclista', price: 180.59},
    {product: 'toalha compacta de secagem', price: 39.99},
    {product: 'kit 5 camisetas Dry Fit', price: 99.99},
    {product: 'caneleiras de peso - 3kg (par)', price: 44.99},
    {product: 'bola de ginástica e pilates', price: 149.59},
    {product: 'óculos de natação', price: 18.99},
    {product: 'capa protetora de prancha de surf', price: 89.59},
    {product: 'bola de basquete', price: 39.99},
  ];

const btnEnviar = document.querySelector('#send-button'); // para acionar o botão ele foi capturado no DOM.
// Evento de click adcionado ao botão capturado.
btnEnviar.addEventListener('click', () => {
    const name = document.querySelector('#name-id').value;  //captura dentro do click o value do input text
    const number = document.querySelector('#number-id').value; //captura o valor do input number

    showPromo(name, number) //aqui será acionado esta função quando o evento de click for acionado.
})

const showPromo = (name, number) => { //A função recebe dois parâmetros o name e o number. Quando a função showPromo for chamada dentro do evento de click 
    const firstText = document.querySelector('#text-initial'); //Aqui ele pega o primeiro parágrafo;
    const secondText = document.querySelector('#text-final'); //Aqui é o segundo parâmetro sendo pego;
    const produtoObject = checkPromo(parseInt(number)); //checkPromo chama todo o objeto que está dentro array
    // o produtoObjeto recebe a função checPromo e o parâmetro é o number; como ela recebe o parâmetro number, a função sabe que é o segundo parâmetro pois a inserção que é chamado na showPromo.

    firstText.innerHTML = `Bem vindo ${name}`; //recebe o value do name, isso acontece quando o button é acionado. Ele será o primeiro parâmetro da função inserido no evento de click, quando a const name captura o value do input no html
    secondText.innerHTML = `A promoção do dia é: ${produtoObject.product} no valor de: ${produtoObject.price}`;
};

const checkPromo = (number) => { //esta função recebe o conteúdo do índice do array dentro da variável number 
    return promo[number - 1]; //o índice do array é sempre -1 pois começa em 0
    //aqui é somente um parâmetro e o algorítimo que se liga a ele é quando ele é chamado pra showPromo e assim ele entende que é o segundo parâmetro somente lá. 
};

