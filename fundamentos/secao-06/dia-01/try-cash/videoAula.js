const verificaValores = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('ERRO! Os valores precisam ser numéricos');
    }
};

const sum = (a, b) => {
    try {
        verificaValores(a, b);
        return a + b;
    }
    catch (erro) {
        return erro.message;
    }
}

console.log(sum(2, 3));
