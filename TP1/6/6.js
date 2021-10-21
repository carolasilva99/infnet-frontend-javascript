// Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve clacular
// a média alcançada por aluno e apresentar:
//  a) A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete.
//  b) A mensagem “Reprovado”, se a média for menor do que sete.
//  c) A mensagem “Aprovado com distinção”, se a média for igual a dez

function pedirNotasAoUsuario(quantidadeNotas) {
    const notas = []

    for (let i = 0; i < quantidadeNotas; i++) {
        let nota = window.prompt(`Insira a nota ${i + 1}`)
        notas.push(parseFloat(nota))
    }

    return notas;
}

function calcularMedia(notas) {
    const quantidadeNotas = parseFloat(notas.length)
    let soma = 0.0

    for (const nota of notas) {
        soma += nota
    }
    return soma / quantidadeNotas
}

const quantidadeNotas = 2
notas = pedirNotasAoUsuario(quantidadeNotas)

let media = calcularMedia(notas)

if (media === 10)
    window.alert(`Aprovado com distinção`)
else if (media >= 7 && media < 10)
    window.alert(`Aprovado`)
else if (media >= 0 && media < 10)
    window.alert(`Reprovado`)
else
    window.alert(`As notas digitadas foram inválidas`)