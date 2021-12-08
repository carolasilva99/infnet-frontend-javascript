function mostraQuestao(questaoHtml) {
    let titulo = `<h1>Questão 5</h1>`
    let paragrafo = `<p>
                           Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos 
                           (label) lado A, lado B e lado C. O componente deve ainda possuir um botão calcular que 
                           quando acionado deve dizer se um triângulo formado por esses 3 lados é um triângulo 
                           equilátero, isósceles ou escaleno.
                        </p>`

    questaoHtml.innerHTML = `${titulo} ${paragrafo}`
}

function montaInputs(questaoHtml) {
    questaoHtml.innerHTML +=
        `<form>
            <div>
                <label for="ladoA">Lado A:</label>
                <input type="number" id="ladoA" name="ladoA" required>
                <label for="ladoB">Lado B:</label>
                <input type="number" id="ladoB" name="ladoB" required>
                <label for="ladoC">Lado C:</label>
                <input type="number" id="ladoC" name="ladoC" required>
                <input type="button" value="Calcular" id="botao" onclick="calcular()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <p>Números:</p>
                <p id="tipoTriangulo"></p>
            </div>
        </form>`
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
function calcular() {
    let lado1 = parseInt(ladoA.value)
    let lado2 = parseInt(ladoB.value)
    let lado3 = parseInt(ladoC.value)

    const lados = [lado1, lado2, lado3]

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        window.alert("É necessário informar todos os valores solicitados.")
        return
    }

    if (!eTriangulo(lados)) {
        window.alert("Os lados informados não formam um triângulo!")
        return
    }

    let tipoTriangulo;

    if (eEquilatero(lados))
        tipoTriangulo = "Equilátero"
    else if (eIsosceles(lados))
        tipoTriangulo = "Isósceles"
    else
        tipoTriangulo = "Escaleno"

    let resultadoNumeros = document.getElementById("tipoTriangulo")

    resultadoNumeros.innerHTML = `${tipoTriangulo}`
}

let q5Html = document.getElementById("q5")
mostraQuestao(q5Html)
montaInputs(q5Html)