//  Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.


function pedirNumeroAoUsuario() {
    const numero = window.prompt(`Insira o número`)
    return parseFloat(numero)
}

function ePositivo(numero) {
    return numero > 0
}

const numero = pedirNumeroAoUsuario()

if (numero === 0)
    window.alert(`O  número digitado foi 0`)
else if (ePositivo(numero))
    window.alert(`O  número digitado é positivo`)
else
    window.alert(`O  número digitado é negativo`)