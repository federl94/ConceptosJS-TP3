/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/
let num = parseInt(prompt('Ingrese un número para conocer su tabla'))

function tablas(num) {    
        document.write(`- ${num}*1=${num*1}<br>`)
        document.write(`- ${num}*2=${num*2}<br>`)    
        document.write(`- ${num}*3=${num*3}<br>`)    
        document.write(`- ${num}*4=${num*4}<br>`)    
        document.write(`- ${num}*5=${num*5}<br>`)    
        document.write(`- ${num}*6=${num*6}<br>`)    
        document.write(`- ${num}*7=${num*7}<br>`)    
        document.write(`- ${num}*8=${num*8}<br>`)    
        document.write(`- ${num}*9=${num*9}<br>`)    
        document.write(`- ${num}*10=${num*10}<br>`)    
    }
tablas(num)

/*let uno = num *1
let dos = num *2
let tres = num *3
let cuatro = num *4
let cinco = num *5
let seis = num *6
let siete = num *7
let ocho = num *8
let nueve = num *9
let diez = num *10*/