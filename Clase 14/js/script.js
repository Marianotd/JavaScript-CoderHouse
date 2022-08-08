// setTimeout(() => {
//     console.log("Hola, buenos días!")
// }, 2002);

// setTimeout(() => {
//     console.log("Hola, buenas tardes!")
// }, 2002);

// setTimeout(() => {
//     console.log("Hola, buenas noches!")
// }, 2002);






// let cont = 0
// const interval = setInterval(() => {
//     if(cont == 3){
//         clearInterval(interval)
//         console.log("Intervalo terminado")
//     }

//     setTimeout(() => {
//         console.log("Hola, buenas noches")
//         cont++
//     }, 1000);

// }, 5000);










class User {
    constructor(id, username, email, password){
        this.id = id
        this.username = username
        this.email = email
        this.password = password
    }
}

const user1 = new User(1, "Pablo", "Parker@parker.com", 1234)
const user2 = new User(2, "Juanes", "Juanes@juanes.com", 1234)
const user3 = new User(3, "Maria", "Martinez@m.com", 1234)
const user4 = new User(4, "Tamara", "Tamales@t.com", 1234)
const user5 = new User(5, "Jacinto", "j@j.com", 1234)
const user6 = new User(6, "Huberto", "h@h.com", 1234)

const users = [user1, user2, user3, user4, user5, user6]


const solicitarUsuarios = (estado) => {
    return new Promise((resolve, reject) => {
        if(estado == true) {
            resolve(users)
        } else {
            reject("Conexión rechazada")
        }

    })
}

solicitarUsuarios(true)
.then((usuarios) => {
    console.table(usuarios)
})
.catch((error) => {
    console.error(error)
})
