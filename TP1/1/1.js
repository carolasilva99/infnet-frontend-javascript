function pedirNotasAoUsuario(quantidadeNotas) {
    const notas = []

    for (let i = 0; i < quantidadeNotas; i++) {
        let nota = window.prompt(`Insira a nota ${i + 1}`)
        notas.push(parseFloat(nota))
    }

    return notas;
}

function calcularMedia(notas) {5

    const quantidadeNotas = parseFloat(notas.length)
    let soma = 0.0

    for (const nota in notas) {
        soma += nota
    }
    return soma / quantidadeNotas
}

const quantidadeNotas = 4
notas = pedirNotasAoUsuario(quantidadeNotas)
let media = calcularMedia(notas)
window.alert(`A média é ${media}`)