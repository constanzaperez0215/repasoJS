// const nombre = prompt('ingresa tu nombre')
// console.log('Mi nombre es: ' + nombre)



const ubicación = prompt('Ingresa tu comuna: ').toLowerCase().replace(/\s+/g, '')

if (ubicación == 'santiago') {
    console.log('Vives en el centro')
} else if (ubicación == 'san joaquin' || ubicación == 'macul' || ubicación == 'ñuñoa' || ubicación == 'providencia' || ubicación == 'recoleta') {
    console.log('Vives cerca del centro')
}else {
    console.log('Vives lejos del centro')
}