const listaDeAprovados = [
  "john.doe@example.com",
  "jane.smith@example.com",
  "mark.wilson@example.com",
  "emily.brown@example.com",
  "david.johnson@example.com"
];

const enviarEmail = (email) => console.log(`Email para ${email} enviado com sucesso!`);

listaDeAprovados.forEach((item, posicao, array) => {
  enviarEmail(item);
  console.log(`Sua posição no processo seletivo é: ${posicao}`);
  console.log(`A quantidade de pessoas no processo seletivo é ${array}`);
});
