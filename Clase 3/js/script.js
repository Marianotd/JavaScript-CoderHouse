for (let i = 1; i <= 100; i++){
    console.log(i)

    if (i == 50 ) {
        break
    }
}


// Consultar por números impares
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){ // Signo % consulta el resto de la división
        continue
    }

    console.log(i)
}

// Consultar por números pares
for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        continue
    }

    console.log(i)
}

// Sumar todos los números entre 1 y 10
let acumulador = 0

for(let i = 1; i <= 10; i++){
    acumulador += i // acumulador = acumulador + i
}

console.log(acumulador)

// WHILE
let repetir = true

while(repetir){
    let palabra = prompt("Ingrese No para terminar").toLowerCase

    if(palabra === "no"){
        repetir = false // Break
    }
}

// DO WHILE
let  numero1, numero2, operacion

do {
    numero1 = parseFloat(prompt("Ingrese un número"))
    numero2 = parseFloat(prompt("Ingrese un número"))
    operacion = prompt("Ingrese una operación (+, - , *, /)")

} while(isNaN(numero1) || isNaN(numero2))

switch(operacion){
    case "+":
        alert(numero1 + numero2)
        break

    case "-":
        alert(numero1 - numero2)
        break

    case "*":
        alert(numero1 * numero2)
        break

    case "/":
        alert(numero1 / numero2)
        break

    default:
        alert("Operación no válida")
        break
}