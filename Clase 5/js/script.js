//  let nombrePersona1 = "Francisco"
//  let apellidoPersona1 = "Pugh"
//  let edadPersona1 = 30
//  let pesoPersona1 = 70
//  let sueldoPersona1 = 12000



// const persona1 = {
//     nombre: "Francisco",
//     apellido: "Pugh",
//     edad: 30,
//     peso: 70,
//     sueldo: 12000
// }

// // Congelo el objeto para que no pueda ser modificado
// Object.freeze(persona1)

// persona1.sueldo = 20000

// persona1.estadoCivil = "Soltero"
// console.log(persona1.estadoCivil)

// console.log(persona1)
// console.log(persona1.sueldo)
// console.log(persona1["sueldo"])



// function Persona(nombre, apellido, edad, sueldo) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.sueldo = sueldo
// } 

// let nombre = prompt("Ingrese un nombre")
// let apellido = prompt("Ingrese un apellido")
// let edad = parseInt(prompt("Ingrese una edad"))
// let sueldo = parseInt(prompt("Ingrese un sueldo"))

// const persona1 = new Persona(nombre, apellido, edad, sueldo)

// Object.freeze(persona1)
// console.log(persona1)




// function Persona(nombre, apellido, edad, sueldo) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.sueldo = sueldo
//     this.saludar = () => console.log(`Hola, me llamo ${this.nombre} y te estoy saludando!`)
//     this.aumentarSueldo = (aumento) => this.sueldo += aumento
// } 

// const persona1 = new Persona("Francisco", "Pugh", 43, 23000)
// const persona2 = new Persona("Ana", "Abuta", 32, 25000)

// persona1.saludar()
// persona2.saludar()
// persona2.aumentarSueldo(10000)

// Object.freeze(persona1)
// console.log(persona2)



class Producto {
    constructor(nombre, marca, precio, stock){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    aumentarPrecio(procentajeAumento){
        this.precio *= procentajeAumento
    }

    aplicarDescuento(porcentajeDescuento){
        this.precio -= (this.precio * porcentajeDescuento)
    }

    aumentarStock(nuevoStock){
        this.stock += nuevoStock
    }

    disminuirStock(nuevoStock){
        this.stock -= nuevoStock
    }

    mostrarProducto(){
        console.log(`${this.nombre} - ${this.marca}`)
    }
}

const producto1 = new Producto("Yerba Mate", "La yerbita", 400, 20)
const producto2 = new Producto("Cafe", "La cafe", 500, 10)
const producto3 = new Producto("Fideos", "Fideito", 100, 30)

Object.freeze(producto1)
producto1.mostrarProducto()
producto1.aplicarDescuento(0.25)
producto1.aumentarPrecio(1.25)
producto1.aumentarStock(10)
producto1.disminuirStock(5)


console.log(producto1)