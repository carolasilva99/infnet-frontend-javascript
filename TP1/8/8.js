// Faça um programa que peça os 3 lados de um triângulo. O programa deverá informar se os
// valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é:
// “Equilátero”, “Isósceles” ou “Escaleno”.
// Dicas:
// I – Três lados formam um triângulo quando a soma de quaisquer dois lados for
// maior que o terceiro.
// II – Triângulo Equilaátero: Três lados iguais.
// III – Triângulo Isósceles: Quaisquer dois laods iguais.
// IV – Triângulo Escaleno: Três lados diferentes.

function pedirLadosAoUsuario(quantidadeLados) {
    const lados = []

    for (let i = 0; i < quantidadeLados; i++) {
        let lado = window.prompt(`Insira o lado ${i + 1}`)
        lados.push(parseFloat(lado))
    }

    return lados;
}

function eTriangulo(lados) {
    return lados[0] < lados[1] + lados[2]
    || lados[1] < lados[0] + lados[2]
    || lados[2] < lados[0] + lados[1]
}

function eEquilatero(lados) {
    return lados[0] === lados[1] && lados[0] === lados[2]
}

function eIsosceles(lados) {
    return lados[0] === lados[1] || lados[0] === lados[2] || lados[1] === lados[2]
}

const quantidadeLados = 3
lados = pedirLadosAoUsuario(quantidadeLados)

if (!eTriangulo(lados))
    window.alert("Não é um triângulo!")
else if (eEquilatero(lados))
    window.alert("Triângulo equilátero")
else if (eIsosceles(lados))
    window.alert("Triângulo isósceles")
else
    window.alert("Triângulo escaleno")