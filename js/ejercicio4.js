/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

let numero = parseInt(prompt('Ingrese un número'))
function parImpar (numero){
    if (numero%2==0) {
        document.write('El número ingresado es par')
        return numero%2==0
    }
    else {
        document.write('El número ingresado es impar')
    }
}
parImpar(numero);