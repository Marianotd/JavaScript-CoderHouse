const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2



let opcion1, opcion2, total = 0
let producto1 = 25999
let producto2 = 11499
let producto3 = 24999
let producto4 = 17999

do { 
    opcion1 = parseInt(prompt(`Bienvenido \nIngrese una opción para continuar: \n1 - Ver productos \n2 - Ver carrito \n0 - Salir`))

    if(isNaN(opcion1) || opcion1 < 0 || opcion1 > 2){
        alert("Opción no válida")
    } else {
        
    }
} while (isNaN(opcion1) || opcion1 < 0 || opcion1 > 2)

switch(opcion1){
    case 1:
        do { 
            opcion2 = parseInt(prompt(`Seleccione el producto que desea comprar: \n1 - Campera Essentials Down ($ 25.999) \n2 - Pantalón de Entrenamiento Tiro 21 ($ 11.499) \n3 - Zapatillas de Trail Running Terrex Soulstride ($ 24.999) \n4 - Zapatillas de Trail Running Tracefinder ($ 17.999) \n0 - Volver atrás`))
        
            if(isNaN(opcion2) || opcion2 < 0 || opcion2 > 4){
                alert("Opción no válida")
            }
        } while (isNaN(opcion2) || opcion2 < 0 || opcion2 > 4)
    
        switch(opcion2){
            case 1:
            case 2:
            case 3:
            case 4:
                alert("Producto añadido al carrito")
                break
    
            default:
                break
        }
        break

    case 2:
        alert(`Su total de compra es $${total}`)
        break

    default:
        alert("Gracias por visitarnos")
        break
}