const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Somente valores númericos')
    }
    return value1 + value2
}

