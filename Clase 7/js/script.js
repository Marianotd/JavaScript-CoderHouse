// const impuestoPais = (producto) => producto * 0.30
// const impuestoRetenciones = (producto) => producto * 0.35
// const impuestoIVA = (producto) => producto * 0.21
// const impuestoX = (producto) => producto * 0.10

// function calcularImpuestos(producto) {
//     return producto + impuestoPais(producto) + impuestoRetenciones(producto) + impuestoIVA(producto) + impuestoX(producto)
//  }

//  let precioFinal = calcularImpuestos(100)

//  console.log(precioFinal)





// class Persona {
//     constructor(nombre, apellido, edad, sueldo){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//         this.sueldo = sueldo
//     }
// }

// const persona1 = new Persona(prompt("Ingrese un nombre"), prompt("Ingrese un apellido"), parseInt(prompt("Ingrese una edad")), parseFloat(prompt("Ingrese un sueldo")))

// console.log(persona1)








class Persona {
    constructor(id, nombre, apellido, edad, sueldo){
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }
}

const persona1 = new Persona(1, "Pepe", "Perez", 30, 10000)
const persona2 = new Persona(2, "Maria", "Martinez", 22, 15000)
const persona3 = new Persona(3, "Pedro", "Parker", 28, 12000)
const persona4 = new Persona(4, "Fernanda", "Fernandez", 32, 18000)
const persona5 = new Persona(5, "Pedro", "Carlez", 34, 19000)

const personas = [persona1, persona2, persona3, persona4, persona5]

// const personaArray = (persona) => console.log(persona)
// personas.forEach(persona => {
//     persona.sueldo *= 1.30
//     console.log(persona)
// })

console.log(personas.find(persona => persona.nombre == "Pedro" && persona.apellido == "Carlez"))
