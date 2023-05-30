  const getDayName = (number) => {
    if (number < 1 || number > 7) return ('Informe um número entre 1 e 7');
    const dayNumber = number - 1;
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[dayNumber];
  };
  
  const printDayname = (dayNumber) => {
    console.log(getDayName(dayNumber));
  };
  
  printDayname