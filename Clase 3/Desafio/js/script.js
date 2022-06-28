// CALCULAR EL FACTORIAL DE UN NÚMERO

let numero = parseInt(prompt("Ingrese un número (Solo aplica para números enteros)"))
let total = 1

for(let i = 1; i <= numero; i++){
    total = total * i
}

alert("El factorial de: " + numero + " es: " + total)

// SOLICITA INGRESAR UN TEXTO Y REPITE EL CICLO HASTA QUE SE INGRESE LA CONTRASEÑA CORRECTA

let password

do {
    password = prompt("Ingrese su contraseña")

} while(password != "Lupolo1")