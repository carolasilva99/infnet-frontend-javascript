// Faça um programa que peça dois números e imprima o maior deles.


function pedirNumerosAoUsuario(quantidadeNumeros) {
    const numeros = []

    for (let i = 0; i < quantidadeNumeros; i++) {
        const numero = window.prompt(`Insira o número ${i + 1}`)
        numeros.push(parseFloat(numero))
    }

    return numeros
}

function encontrarOMaiorNumeroNoArray(numeros) {
    return Math.max(...numeros)
}

const quantidadeNumeros = 2
const numeros = pedirNumerosAoUsuario(quantidadeNumeros)
const maiorNumeroDoArray = encontrarOMaiorNumeroNoArray(numeros)
window.alert(`O maior número digitado é ${maiorNumeroDoArray}`)