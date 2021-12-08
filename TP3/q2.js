function mostraQuestao(questaoHtml) {
    let titulo = `<h1>Questão 2</h1>`
    let paragrafo = `<p>
                           Crie um componente que tenha uma caixa de texto que só aceita números e tenha o rótulo (label) 
                           Calcular o fatorial de. O componente deve ainda possuir um botão calcular que quando acionado 
                           deve calcular o fatorial do número digitado, imprimido o resultado e o tempo necessário para 
                           a execução. (Dica: usar o objeto javascript Date)
                        </p>
                        <ul>
                            <li>O resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos);</li>
                            <li>O código deve calcular o fatorial e não apenas imprimir uma string com a resposta.</li>
                        </ul>`

    questaoHtml.innerHTML = `${titulo} ${paragrafo}`
}

function montaInputs(questaoHtml) {
    questaoHtml.innerHTML +=
        `<form>
            <div>
                <label for="num" class="label_minimo">Número:</label>
                <input type="number" id="num" name="num" required>
                <input type="button" value="Calcular" id="botao" onclick="calcular()">
            </div> 
            <div>
                <h2>Resultado</h2>
                <p>Fatorial:</p>
                <p id="fatorial"></p>
            </div>
        </form>`
    return
}

function calcularFatorial(numero) {
    let resultado = numero

    for (let i = 1; i < numero; i++) {
        resultado = resultado * i
    }

    return resultado
}

function calcular() {
    let numero = parseInt(num.value)

    if (isNaN(numero)) {
        window.alert("É necessário informar um valor.")
        return
    }

    if (numero < 0) {
        window.alert("O valor deve ser positivo.")
        return
    }

    let tempoInicial = new Date().getTime();
    let fatorial = calcularFatorial(numero)
    let tempoFinal = new Date().getTime();
    let tempoDecorrido = Math.floor((tempoFinal - tempoInicial) / 1000);

    let fatorialHtml = document.getElementById("fatorial")

    fatorialHtml.innerHTML = `${numero}! = ${fatorial} - ${tempoDecorrido} milisegundos`
}

let q2Html = document.getElementById("q2")
mostraQuestao(q2Html)
montaInputs(q2Html)