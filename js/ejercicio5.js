/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/
let texto = prompt('Ingrese un texto')
function cadena (texto) {
    document.write(`-${texto}<br>`)
    if (texto== texto.toLowerCase()) {
        document.write('El texto está en minúsculas')
    }
    else if (texto==texto.toUpperCase()) {
        document.write('El texto está en mayúsculas')
    }
    else {
        document.write('El texto está en mayúsculas y minúsculas')
    }
}
cadena(texto)