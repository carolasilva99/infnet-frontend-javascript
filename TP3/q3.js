class Aluno {
    constructor(id,nome, nota, situacao) {
        this.id = id;
        this.nome = nome;
        this.nota = nota;
        this.situacao = situacao
    }
}

function mostraQuestao(questaoHtml) {
    let titulo = `<h1>Questão 3</h1>`
    let paragrafo = `<p>
                           Crie um componente que possua um botão criar relatório que quando acionado deve imprimir um 
                           relatório de resultados da disciplina javascript para 20 alunos, no formato de tabela.
                        </p>
                        <ul>
                            <li>As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;</li>
                            <li>Cada aluno deve ser representado por um registro composto por nr e nota</li>
                            <li>Use uma função construtora chamada Aluno reveja conceitos aqui ou aqui, se quiser ousar 
                            um pouco veja classes;</li>
                            <li>Armazena a nota do aluno como uma variável privada do tipo symbol, use getters e setters
                             para recuperar a informação.</li>
                            <li>Os registros devem ser armazenados em um array;</li>
                            <li>A impressão do relatório deve ter:</li>
                            <ul>
                                <li>um título;</li>
                                <li>os resultados mostrados linha a linha no formato "Aluno nr xx - Nota yy 
                                [(A/RE)PROVADO]"; e</li>
                                <li>um rodapé com estatística final no formato "APROVADOS: XX (xx%)  |  REPROVADOS: YY 
                                (yy%)</li>
                            </ul>
                        </ul>`

    questaoHtml.innerHTML = `${titulo} ${paragrafo}`
}

function montaDetalhe(questaoHtml) {
    questaoHtml.innerHTML +=
        `<form>
            <div>
                <input type="button" value="Criar relatório" id="botao" onclick="imprimirRelatorio()">
            </div> 
            <div>
                <h2>Relatório</h2>
                <div>
                    <table class="table" id="relatorioTabela">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome Aluno</th>
                                <th>Nota</th>
                                <th>Situação</th>
                            </tr>
                        </thead>
                        <tbody id="relatorioTabelaBody">
                        </tbody>
                        <tfoot id="tabelaFooter"></tfoot>
                        </table>
                    <div id="estatistica"></div>
                </div>
            </div>
        </form>`
    return
}

function montaLinhaTabelaResultado(questaoHtml, notas){
    questaoHtml.innerHTML +=
        `<tr>
                <td>${notas.id}</td>
                <td>${notas.nome}</td>
                <td>${notas.nota}</td>
                <td>${notas.situacao}</td>
            </tr>`
}

function imprimirEstatistica(aprovados, reprovados){
    let footerHtml = document.getElementById("estatistica")
    footerHtml.innerHTML +=
        `<tr>
            <td colspan="4">
                Alunos aprovados: ${aprovados}</br>
                Alunos reprovados: ${reprovados}
            </td>
        </tr>`

}

function gerarNome(tamanho) {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let nome = '';
    for (let i = 0; i < tamanho; i++ ) {
        nome += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return nome;
}

function gerarNota() {
    return Math.floor(Math.random() * 101);
}

function gerarAlunos(quantidade) {
    let alunos = []

    for (let i = 0; i < quantidade; i++) {
        let nome = gerarNome(10)
        let nota = gerarNota()
        let situacao = nota >= 60 ? "Aprovado" : "Reprovado"

        let aluno = new Aluno(i, nome, nota, situacao)
        alunos.push(aluno)
    }
    return alunos
}

function imprimirRelatorio() {
    let quantidadeAlunos = 20
    let alunos = gerarAlunos(quantidadeAlunos)
    let aprovados = 0
    let reprovados = 0
    let tabelaHtml = document.getElementById("relatorioTabelaBody")

    for(let aluno of alunos){
        montaLinhaTabelaResultado(tabelaHtml, aluno)
        aprovados += aluno.nota >= 60 ? 1 : 0
        reprovados += aluno.nota < 60 ? 1 : 0
    }

    imprimirEstatistica(aprovados, reprovados)
}


let q3Html = document.getElementById("q3")
mostraQuestao(q3Html)
montaDetalhe(q3Html)