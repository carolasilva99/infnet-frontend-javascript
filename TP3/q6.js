function mostraQuestao(questaoHtml) {
    let titulo = `<h1>Questão 6</h1>`
    let paragrafo = `<p>
                           Criar um componente para criação de usuário e login em aplicação(sign up/ sign in).
                            No 1o cenário, antes de estar logado, o visitante se depara com o formulário de login ou de 
                            criação de usuário. Se for feito o login com sucesso, o componente deve levar ao cenário 2, 
                            se falhar ele deve alertar o usuário e voltar ao início do cenário 1. Se o usuário optar 
                            por criar um usuário, o componente deve criar o registro de um novo usuário e voltar para 
                            início do cenário 1.

                            No cenário 2, após logado, mostrar apenas um texto de logado no componente e um botão 
                            (ou link) para deslogar, retornando ao início do cenário 1.

                            Deve ser possível criar múltiplos usuários e, se fechada, a página não pode perder os 
                            registros de usuários  armazenados.
                        </p>`

    questaoHtml.innerHTML = `${titulo} ${paragrafo}`
}

function montaInputs(questaoHtml) {
    questaoHtml.innerHTML +=
        `<form id="deslogado" style="visibility: visible">
            <div>
                <h2>Fazer login: </h2>
                <label for="login">Login:</label>
                <input type="text" id="login" name="login" required>
                <label for="senhaLogin">Senha:</label>
                <input type="password" id="senhaLogin" name="senhaLogin" required>
                <input type="button" value="Login" id="botao" onclick="fazerLogin()">
            </div> 
            <div>
                <h2>Criar usuário: </h2>
                <label for="novoLogin">Login:</label>
                <input type="text" id="novoLogin" name="novoLogin" required>
                <label for="novoSenha">Senha:</label>
                <input type="password" id="novoSenha" name="novoSenha" required>
                <input type="button" value="Login" id="botao" onclick="criarUsuario()">
            </div> 
        </form>
        <div id="logado" style="visibility: hidden">
            <p>Usuário fez login com sucesso</p>
            <input type="button" value="Sair" id="btnSair" onclick="deslogar()">
        </div>`
}

function buscaUsuariosLocalStorage() {
    let usuariosCadastrados = JSON.parse(localStorage.getItem("USUARIOS"))

    if (usuariosCadastrados == null)
        usuariosCadastrados = []

    return usuariosCadastrados;
}

function adicionarUsuarioLocalStorage(usuario, senha) {
    let usuariosCadastrados = buscaUsuariosLocalStorage()

    usuariosCadastrados.push({usuario,senha})

    localStorage.setItem("USUARIOS", JSON.stringify(usuariosCadastrados))
}

function usuarioJaExiste(usuario) {
    const usuariosCadastrados = buscaUsuariosLocalStorage()

    return !!usuariosCadastrados.some(usu => usu.usuario === usuario);


}

function criarUsuario() {
    let usuario = novoLogin.value
    let senha = novoSenha.value

    if (usuarioJaExiste(usuario))
        window.alert("O usuário já existe!")
    else
        adicionarUsuarioLocalStorage(usuario, senha)
        window.alert("Usuário adicionado com sucesso!")
        novoLogin.value = ""
        novoSenha.value = ""
}

function loginValido(usuario, senha) {
    const usuariosCadastrados = buscaUsuariosLocalStorage()

    return !!usuariosCadastrados.some(usu => usu.usuario === usuario && usu.senha === senha);
}

function fazerLogin() {
    let usuario = login.value
    let senha = senhaLogin.value

    if (loginValido(usuario, senha)) {
        login.value = ''
        senhaLogin.value = ''

        deslogadoElement = document.getElementById('deslogado')
        logadoElement = document.getElementById('logado')

        deslogadoElement.style.visibility = 'hidden'
        logadoElement.style.visibility = 'visible'
    }
    else {
        window.alert("Login ou senha inválidos!")
    }
}

function deslogar() {
    deslogadoElement = document.getElementById('deslogado')
    logadoElement = document.getElementById('logado')

    deslogadoElement.style.visibility = 'visible'
    logadoElement.style.visibility = 'hidden'
}

let q6Html = document.getElementById("q6")
mostraQuestao(q6Html)
montaInputs(q6Html)