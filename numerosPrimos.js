// const inicio = 0
// const fin = 383
// let i = inicio

// while (i < fin) {
//     if (i === 0 || i === 1) {
//         console.log('No es primo')
//         return false
//     }else{
//         while (i < fin) {
//         if (i % i == 0) {
//             console.log('No es primo')
//             i++
//         }else{
//             console.log('Es primo')
//             i++
//         }
//     }}
// }

for (let i = 0; i < 383; i++)
    if (i < 2) {
        console.log(i + ' No es primo')
    } else {
        let esPrimo = true
        for (let p = 2; p * p <= i; p++) {
            if (i % p === 0) {
                esPrimo = false
            }
        }
        if (esPrimo) {
            console.log(i+' Es primo')
        }else{
            console.log(i+' No es primo')
        }
    }