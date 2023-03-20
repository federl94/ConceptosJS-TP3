/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)*/
const valorA = parseInt(prompt('Ingrese primer lado de un rectángulo'))
const valorB = parseInt(prompt('Ingrese segundo lado de un rectángulo'))
function calcularPerimetro (valorA,valorB) {
    document.write(`Lado A= ${valorA}<br>`)
    document.write(`Lado B= ${valorB}<br>`)
    let p = 2*(valorA + valorB)
    document.write(`El perímetro del rectángulo es: ${p}`)
}
calcularPerimetro(valorA,valorB)