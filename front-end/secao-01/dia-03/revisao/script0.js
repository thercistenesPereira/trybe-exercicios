const sum = (a, b) => {
    return a + b
};

const soma = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        return 'O valor deve ser um número'
    };
    return value1 + value2;
}

console.log(soma(2, '3'));