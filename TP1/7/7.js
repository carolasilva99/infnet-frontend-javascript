// Faça um programa que imprima “Bom dia”, “Boa tarde” ou “Boa noite” dependendo da hora
// do dia. Dica: use a classe Date

function imprimirBoasVidas() {
    const data = new Date()
    const hora = data.getHours()

    if (hora >= 6 && hora < 12)
        window.alert(`Bom dia!`)
    else if (hora >= 12 && hora < 18)
        window.alert(`Boa tarde`)
    else
        window.alert(`Boa noite!`)
}

imprimirBoasVidas()