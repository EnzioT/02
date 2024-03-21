const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let message = [
    'Estas segura?',
    'Vamos, piensalo bien',
    'Mira el otro boton jsjsjs',
    'Esto no tiene fin jajsjs, solo di que sí',
    'Piensalo pofavor'
]
buttonNo.addEventListener('click', ()=> {
    fontSize = fontSize + .5
    buttonYes.style.fontSize = `${fontSize}rem`

    const indexRandom = Math.floor(Math.random()*message.length)

    buttonNo.textContent= message[indexRandom]
})

buttonYes.addEventListener('click', ()=> {
    document.querySelector('#message').style.display = 'flex'
})