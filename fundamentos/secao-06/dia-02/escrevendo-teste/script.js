const numeros = (array) => {
    for (let index = 0; index < array.length; array += 1) {
        if (typeof array !== 'number') {
            return false;
        }
    }
};

module.exports = numeros;
