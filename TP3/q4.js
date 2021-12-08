function mostraQuestao(questaoHtml) {
    let titulo = `<h1>Questão 4</h1>`
    let paragrafo = `<p>
                            Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos 
                            (label) Quantidade de números, valor mínimo e valor máximo. O componente deve ainda possuir
                             um botão calcular que quando acionado deve criar um array com quantidade de números 
                             aleatórios não repetidos e ordená-los. Os números devem estar entre valor mínimo e valor 
                             máximo (inclusives, ou seja incluindo o valor mínimo e valor máximo). Lembre-se que para 
                             calcular quantidade de números deve ser menor que a soma de valor mínimo e valor máximo.
                        </p>`

    questaoHtml.innerHTML = `${titulo} ${paragrafo}`
}

function montaInputs(questaoHtml) {
    questaoHtml.innerHTML +=
        `<form>
            <div>
                <label for="quantidadeNumeros">Quantidade de números:</label>
                <input type="number" id="qtdNumeros" name="qtdNumeros" required>
                <label for="valorMinimo" class="label_minimo">Valor mínimo:</label>
                <input type="number" id="valorMinimo" name="valorMinimo" required>
                <label for="valorMaximo">Valor máximo:</label>
                <input type="number" id="valorMaximo" name="valorMaximo" required>
                <input type="button" value="Calcular" id="botao" onclick="calcular()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <p>Números:</p>
                <p id="numerosAleatorios"></p>
            </div>
        </form>`
}

function geraNumeroAleatorioEntre(numeroMinimo, numeroMaximo) {
    return Math.floor(Math.random() * numeroMaximo) + numeroMinimo;
}

function calcular() {
    let quantidadeNumeros = parseInt(qtdNumeros.value)
    let numeroMinimo = parseInt(valorMinimo.value)
    let numeroMaximo = parseInt(valorMaximo.value)

    if (isNaN(quantidadeNumeros) || isNaN(numeroMinimo) || isNaN(numeroMaximo)) {
        window.alert("É necessário informar todos os valores solicitados.")
        return
    }

    if (quantidadeNumeros >= numeroMinimo + numeroMaximo) {
        window.alert("A quantidade de números deve ser menor que a soma de valor mínimo e valor máximo")
        return
    }

    let numeros = []

    for (let i = 0; i < quantidadeNumeros; i++) {
        let numeroGerado = geraNumeroAleatorioEntre(numeroMinimo, numeroMaximo)
        while (numeros.includes(numeroGerado)) {
            numeroGerado = geraNumeroAleatorioEntre(numeroMinimo, numeroMaximo)
        }
        numeros.push(numeroGerado)
    }

    let numerosOrdenados = numeros.sort();

    let resultadoNumeros = document.getElementById("numerosAleatorios")

    resultadoNumeros.innerHTML = `${numerosOrdenados}`
}

let q4Html = document.getElementById("q4")
mostraQuestao(q4Html)
montaInputs(q4Html)