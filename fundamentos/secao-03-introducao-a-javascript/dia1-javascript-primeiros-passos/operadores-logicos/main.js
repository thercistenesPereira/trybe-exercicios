let currentHour = 20
let message = ''
if(currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir'
}
else if (currentHour >= 18 && currentHour < 22){
    message = 'Rango da noite, vamos jantar :D'
}
else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?'
}
else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!” na variável '
}
else if (currentHour >= 4 && currentHour < 11) {
    message = 'Hmmm, cheiro de café recém-passado” na variável '
}
//console.log(message)

let weekDay = 'quarta-feira'
if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D')
} else {
    console.log('FINALMENTE, descanso merecido! UwU!')
}
