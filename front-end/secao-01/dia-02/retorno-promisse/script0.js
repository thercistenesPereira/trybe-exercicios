const gerenateNumber = () => Math.round(Math.random() * 10);

const resolvedPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = gerenateNumber();
            resolve(randomNumber);
        }, 1000);
    });

const rejectdPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = gerenateNumber();
            reject(new Error(`O número ${randomNumber} não é válido`));
        }, 1000);
    });

const randomPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = gerenateNumber();
            if(randomNumber % 2 === 0) {
                resolve(randomNumber);
            } else {
                reject(new Error(`O número ${randomNumber} não é válido. Somente números pares`))
            }
        })
    });

// resolvedPromise().then((response) => {
//     console.log(`resolvedPromise : O número gerado é ${response}`);
// });

// rejectdPromise().then((response) => {
//     console.log(`rejectdPromise: O número gerado é ${response}`);
//     }).catch((error) => {
//         console.log(`rejectdPromise: ${error.message}`);
//     });

randomPromise()
    .then((response) => {
        console.log(`Promisse resolvida. O número gerado foi ${response}`)
    })
    .catch((error )=> {
        console.log(`Promisse rejeitada: ${error.message}`);
});
