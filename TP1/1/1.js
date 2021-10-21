// Faça um programa que peça as 4 notas bimestrais e mostre a média.

function pedirNotasAoUsuario(quantidadeNotas) {
    const notas = []

    for (let i = 0; i < quantidadeNotas; i++) {
        let nota = window.prompt(`Insira a nota ${i + 1}`)
        notas.push(parseFloat(nota))
    }

    return notas;
}

function calcularMedia(notas) {
    const quantidadeNotas = notas.length
    console.log(quantidadeNotas)
    let soma = 0.0

    for (const nota of notas) {
        console.log("nota", nota)
        soma += nota
    }
    console.log(soma)
    return soma / quantidadeNotas
}

const quantidadeNotas = 4
notas = pedirNotasAoUsuario(quantidadeNotas)
console.log(notas)
let media = calcularMedia(notas)
window.alert(`A média é ${media}`)