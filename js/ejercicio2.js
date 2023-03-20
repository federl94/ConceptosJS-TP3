/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:*/
let ciudades = []
do {
  let ciudadUser = prompt('Ingrese una ciudad');
  ciudades.push(ciudadUser)
}
while(confirm('¿Desea continuar agregando ciudades?')==true)
for(let indice=0;indice<ciudades.length;indice++){
  document.write(`- ${ciudades[indice]}<br>`);
}
document.write('<br>')
//longitud del arreglo
document.write(`<h4>La longitud del arreglo es: ${[ciudades.length]}</h4>`)

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write('<h2>Posiciones: </h2>')
document.write(`Primera posición: ${ciudades[0]}<br>`)
document.write(`Tercera posición: ${ciudades[2]}<br>`)
document.write(`Última posición: ${ciudades[ciudades.length-1]}<br>`)

//Añade en última posición la ciudad de París.
document.write('<h2>Se añade París en la última posición</h2><br>')
ciudades.push('París')
document.write(`${ciudades}<br>`)
document.write('<br>')

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`<h3>El elemento que ocupa la segunda posición es: ${ciudades[1]}</h3><br>`)

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
document.write('<h3>Se sustituye la segunda posición por la ciudad de "Barcelona"</h3><br>')
ciudades[1] = 'Barcelona'
document.write(ciudades)
document.write('<br>')