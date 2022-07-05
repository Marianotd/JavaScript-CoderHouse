// const valores = []
// const cosas = [true, 56, "Hola", false, "Chau", 100]

// cosas[0] = "saludos"

// cosas[10] = "Hola gente"

// console.log(cosas[10])

// for(let i = 0; i < cosas.length; i++){
//     console.log(cosas[i])
// }

// const alumnos = ["Camilo", "Julieta", "Santiago", "Luca"]

// alumnos.push("Brandom")
// alumnos.unshift("Francisco")

// alumnos.shift()
// let alumnoBrandom = alumnos.pop()

// const alumnosEliminados = alumnos.splice(2,1)

// console.log(alumnos)

// alumnos.splice(0, alumnos.length)

// console.log(alumnos)
// console.log(alumnosEliminados)

// const tutores = ["Samuel"]
// console.log(tutores.shift())
// console.log(tutores)


const alumnos1 = ["camilo", "Julieta", "Santiago", "Luca"]

alumnos1.push("Brandon")
alumnos1.unshift("Diego")

const alumnos2 = ["Rocio", "Juan", "Santiago", "Fernando"]

const alumnosTotales = alumnos2.concat(alumnos1)

console.log(alumnosTotales)


// let nombreEliminar = prompt("Ingrese un nombre a eliminar")

// let indice = alumnos.indexOf(nombreEliminar)

// if(indice != -1){
//     alumnos.splice(indice, 1)
// } else {
//     alert("Usuario no encontrado")
// }

// console.log(alumnos)

alumnos1 = alumnos1.join(", ")

console.log(alumnos1)

