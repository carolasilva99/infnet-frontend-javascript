// Faça um programa que verifique se uma letra digitada é vogal ou consoante


function pedirLetraAoUsuario() {
    return window.prompt(`Insira a letra`)
}

function eVogal(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    return vogais.includes(letra)
}

const letra = pedirLetraAoUsuario()

if (letra.length !== 1 || !letra.match(/[a-zA-Z]/))
    window.alert(`É necessário digitar apenas uma letra!`)
else if (eVogal(letra))
    window.alert(`A letra digitada é uma vogal`)
else
    window.alert(`A letra digitada é uma consoante`)