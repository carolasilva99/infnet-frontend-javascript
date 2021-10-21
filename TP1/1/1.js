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
        console.log("nota", nota)
        soma += nota
    }
    console.log("soma: ", soma)
    return soma / quantidadeNotas
}

const quantidadeNotas = 4
notas = pedirNotasAoUsuario(quantidadeNotas)
let media = calcularMedia(notas)
console.log(notas)
console.log(media)
window.alert(`A média é ${media}`)