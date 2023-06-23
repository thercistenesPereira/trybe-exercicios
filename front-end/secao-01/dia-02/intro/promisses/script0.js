const gerenateNumber = () => Math.round(Math.random() * 10);

const resolvedPromisse = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = gerenateNumber();
            resolve(randomNumber);
        }, 1000);
    });
};

const rejectdPromisse = () => {
    new Promise((resove, reject) => {
        setTimeout(() => {
            const randomNumber = gerenateNumber();
            reject(new Error(`O número ${randomNumber} é inválido`));
        })
    }, 1000);
};

console.log(gerenateNumber());