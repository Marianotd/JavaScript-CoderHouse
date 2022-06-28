// function saludar() {
//     console.log("Hola, te estoy saludando!")
// }

// saludar()



// function sumar() {
//     let numero1 = parseFloat(prompt("Ingrese un número"))
//     let numero2 = parseFloat(prompt("Ingrese un número"))
//     console.log(numero1 + numero2)
// }

// sumar()



// function sumar(numero1 = 0, numero2 = 0){
//     console.log(numero1 + numero2)
// }

// let numero1 = parseFloat(prompt("Ingrese un número"))
// let numero2 = parseFloat(prompt("Ingrese otro número"))

// sumar(numero1, numero2)



// function sumar (numero1 = 0, numero2 = 0){
//     return numero1 + numero2
// }

// let resultado =sumar(numero1, numero2)
// console.log(resultado)



// function saludar(nombre){ 
//     return `Hola, me llamo ${nombre} y te estoy saludando`
// }

// let cadena = saludar("Mariano")
// console.log(cadena)



// const IVA = 1.21

// function calcularIVA(precioProducto){
//     return precioProducto * IVA
// }

// console.log(calcularIVA(100))
// console.log(IVA)



// function sumar(num1, num2){
//     return num1 + num2
// }

// function restar(num1, num2){
//     return num1 - num2
// }

// function multiplicar(num1, num2){
//     return num1 * num2
// }

// function dividir(num1, num2){
//     return num1 / num2
// }

// const sumar = function (num1, num2) {
//     return num1 + num2
// }

// const restar = function (num1, num2) {
//     return num1 - num2
// }

// const multiplicar = function (num1, num2) {
//     return num1 * num2
// }

// const dividir = function (num1, num2) {
//     return num1 / num2
// }



const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

let numero1, numero2, operacion

do {
    numero1 = parseFloat(prompt("Ingrese un número"))
    numero2 = parseFloat(prompt("Ingrese otro número"))
    operacion = prompt("Ingrese una operación")

    if(isNaN(numero1) || isNaN(numero2)){
        alert("Por favor ingresar un número válido")
    }

    if(numero2 === 0 && operacion === "/"){
        alert("No se puede dividir entre cero")
    }
} while ((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion == "/"))

switch(operacion) {
    case "+":
        alert(sumar(numero1, numero2))
        break

    case "-":
        alert(restar(numero1, numero2))
        break

    case "*":
        alert(multiplicar(numero1, numero2))
        break

    case "/":
        alert(dividir(numero1, numero2))
        break

    default:
        alert("Opción no válida")
        break
}