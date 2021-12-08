function mostraQuestao(questaoHtml) {
    let titulo = `<h1>Questão 1</h1>`
    let paragrafo = `<p>
                            Crie um componente que tenha duas caixas de texto que só aceitam números e tenha os rótulos (label) valor
                            mínimo e valor máximo, checando sempre se o valor mínimo é menor que o valor máximo. O componente deve ainda
                            possuir um botão calcular que quando acionado deve contar e imprimir quantos números existem entre valor
                            mínimo e valor máximo (exclusives*) que sejam múltiplos de 2 e 3 simultaneamente. Não deve ser possível
                            calcular se faltar algum dos números.</br></br>
                            <strong>* exclusives - Ou seja, quantos números existem entre</strong> valor mínimo e valor máximo, <strong>excluindo o</strong> valor mínimo e valor máximo
                        </p>`

    questaoHtml.innerHTML = `${titulo} ${paragrafo}`
}

function montaInputs(questaoHtml) {
    questaoHtml.innerHTML +=
        `<form>
            <div>
                <label for="minimo" class="label_minimo">Valor mínimo:</label>
                <input type="number" id="minimo" name="minimo" required>
                <label for="maximo">Valor máximo:</label>
                <input type="number" id="maximo" name="maximo" required>
                <input type="button" value="Calcular" id="botao" onclick="calcular()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <p>Quantidade de números:</p>
                <p id="quantidadeNumeros"></p>
                <p>Números:</p>
                <p id="numeros"></p>
            </div>
        </form>`
    return
}

function numeroEMultiploDe(numero, multiploDe) {
    return numero % multiploDe;
}


function numerosMultiplosDe2EDe3(numMinimo, numMaximo) {
    const numeros = [];

    for (let i = numMinimo + 1; i < numMaximo; i++) {
        if (numeroEMultiploDe(i, 2) && numeroEMultiploDe(i, 3)) {
            numeros.push(i);
        }
    }

    return numeros
}

function calcular() {
    let numeroMinimo = parseInt(minimo.value)
    let numeroMaximo = parseInt(maximo.value)

    if (isNaN(numeroMinimo) || isNaN(numeroMaximo)) {
        window.alert("É necessário informar todos os valores solicitados.")
        return
    }

    if (numeroMinimo >= numeroMaximo) {
        window.alert("O valor mínimo deve ser menor que o valor máximo.")
        return
    }

    let numeros = numerosMultiplosDe2EDe3(numeroMinimo, numeroMaximo)

    let qtdNumerosHtml = document.getElementById("quantidadeNumeros")
    let numerosHtml = document.getElementById("numeros")

    qtdNumerosHtml.innerHTML = `${numeros.length}`
    numerosHtml.innerHTML = `${numeros}`
}

let q1Html = document.getElementById("q1")
mostraQuestao(q1Html)
montaInputs(q1Html)