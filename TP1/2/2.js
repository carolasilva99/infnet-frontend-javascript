//  Faça um programa que peça a temperatura em graus Fahrenheit, transforme e mostre a
// temperatura em graus Celsius.
// C = 5 * ((F-32) / 9)

function pedirTemperaturaFahrenheitAoUsuario() {
    return window.prompt(`Insira a temperatura em Fahrenheit`)
}

function converterTemperaturaFahrenheitParaCelsius(temperaturaFahrenheit) {
    return 5 * ((temperaturaFahrenheit - 32) / 9)
}

const temperaturaFahrenheit = pedirTemperaturaFahrenheitAoUsuario()
const temperaturaCelsius = converterTemperaturaFahrenheitParaCelsius(temperaturaFahrenheit)
window.alert(`A temperatura em Celsius é ${temperaturaCelsius}`)