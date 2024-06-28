// FOR

const numeros = [1,2,3,4,5]

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index]
    console.log(element)
}


// FOR OF

const frutas = ['manzana', 'pera', 'platano']

for (const fruta of frutas) {
    console.log(fruta)
}


// FOR IN

const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Desarrollador'
}

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`)
}