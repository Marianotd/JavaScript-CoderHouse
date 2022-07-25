// localStorage.setItem("saludar", "Hola")
// console.log(localStorage.getItem("saludar"))






const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")

let darkMode

if(localStorage.getItem("theme")){   
    darkMode = localStorage.getItem("theme")
} else {
    localStorage.setItem("theme", "light")
}

if(darkMode == "dark"){
    document.body.classList.add("darkMode")
}

botonDarkMode.addEventListener("click", () => {
    // document.body.style.backgroundColor = "#000"
    // document.body.style.color = "#fff"
    document.body.classList.add("darkMode")
    localStorage.setItem("theme", "dark")
})

botonLightMode.addEventListener("click", () => {
    // document.body.style.backgroundColor = "#fff"
    // document.body.style.color = "#000"
    document.body.classList.remove("darkMode")
    localStorage.setItem("theme", "light")
})














