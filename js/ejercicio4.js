/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

let numero = parseInt(prompt('Ingrese un número'))
function parImpar (numero){
    return numero%2==0
}
if (numero%2==0) {
    document.write('El número ingresado es par')
}
else {
    document.write('El número ingresado es impar')
}