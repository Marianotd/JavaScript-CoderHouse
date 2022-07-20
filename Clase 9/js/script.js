// const boton1 = document.getElementById("boton1")

// boton1.addEventListener("click", () => {
//     console.log("Di click en boton")
// })

// boton1.onclick = () => {
//     console.log("Di click en boton de onclick")
// }





const input1 = document.getElementById("input1")
const inputColor = document.getElementById("inputColor")

input1.addEventListener("input", () =>{
    console.log(input1.value)
})

inputColor.addEventListener("input", () =>{
    document.body.style.backgroundColor = inputColor.value
    console.log(inputColor.value)
})


