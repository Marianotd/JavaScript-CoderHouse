const sumar = (num1, num2) => num1 + num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

let opcion1, opcion2, opcion3, carrito = 0, IVA = 0, total = 0, totalen3 = 0, totalEn6 = 0, totalEn12 = 0

class Producto {
    constructor(id, nombre, categoia, precio) {
        this.id = id
        this.nombre = nombre
        this.categoia = categoia
        this.precio = precio
    }
}

const producto1 = new Producto(1, "Campera Essentials Down", "Camperas", 25999)
const producto2 = new Producto(2, "Pantalón de Entrenamiento", "Pantalones", 11499)
const producto3 = new Producto(3, "Zapatillas de Trail Running Terrex Soulstride", "Zapatillas", 24999)
const producto4 = new Producto(4, "Zapatillas de Trail Running Tracefinder", "Zapatillas", 17999)

const productos = [producto1, producto2, producto3, producto4]

do { 
    opcion1 = parseInt(prompt(`Bienvenido \nIngrese una opción para continuar: \n1 - Ver productos \n2 - Ver carrito \n0 - Salir`))

    if(isNaN(opcion1) || opcion1 < 0 || opcion1 > 2){
        alert("Opción no válida")
    }

    switch(opcion1){
        case 1:
            do { 
                opcion2 = parseInt(prompt(`Seleccione el producto que desea comprar: \n1 - ${producto1.nombre} - $${producto1.precio} \n2 - ${producto2.nombre} - $${producto2.precio} \n3 - ${producto3.nombre} - $${producto3.precio} \n4 - ${producto4.nombre} - $${producto4.precio} \n0 - Volver atrás`))
            
                if(isNaN(opcion2) || opcion2 < 0 || opcion2 > 4){
                    alert("Opción no válida")
                }
            } while (isNaN(opcion2) || opcion2 < 0 || opcion2 > 4)
        
            switch(opcion2){
                case 1:
                    carrito += producto1.precio
                    alert(`¡Producto añadido al carrito! \nSu subtotal de compra es $${carrito}`)
                    break
                case 2:
                    carrito += producto2.precio
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${carrito}`)
                    break
                case 3:
                    carrito += producto3.precio
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${carrito}`)
                    break
                case 4:
                    carrito += producto4.precio
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${carrito}`)
                    break
                default:
                    break
            }
            break
    
        case 2:
            IVA = multiplicar(carrito, 0.21)
            total = sumar(carrito, IVA)
            alert(`Detalle de compra: \nSubtotal productos: $${carrito} \nIVA $${IVA} \nTotal $${total}`)

            if(carrito == 0) {
                alert("Aun no ha ingresado productos al carrito")
                break
            }

            do { 
                opcion2 = parseInt(prompt(`¿Como desea realizar su pago? \n1 - Efectivo (15% off) \n2 - Debito/Mercado Pago \n3 - Crédito \n0 - Volver al menú principal`))
            
                if(isNaN(opcion2) || opcion2 < 0 || opcion2 > 3){
                    alert("Opción no válida")
                }
            } while (isNaN(opcion2) || opcion2 < 0 || opcion2 > 3)
        
            switch(opcion2){
                case 1:
                    total = multiplicar(total, 0.85)
                    
                    do { 
                        opcion3 = parseInt(prompt(`Su total de compra es $${total} \n\n¿Desea continuar? \n1 - Si \n2 - No`))
                    
                        if(isNaN(opcion3) || opcion3 < 1 || opcion3 > 2){
                            alert("Opción no válida")
                        }
                    } while (isNaN(opcion3) || opcion3 < 0 || opcion3 > 2)
                
                    switch(opcion3){
                        case 1:
                            carrito = 0
                            alert(`¡Gracias por su compra! \nLo esperamos con su pedido por caja`)
                            break
                        default:
                            break
                    }
                    break
                case 2:
                    do { 
                        opcion3 = parseInt(prompt(`Su total de compra es $${total} \n\n¿Desea continuar? \n1 - Si \n2 - No`))
                    
                        if(isNaN(opcion3) || opcion3 < 1 || opcion3 > 2){
                            alert("Opción no válida")
                        }
                    } while (isNaN(opcion3) || opcion3 < 0 || opcion3 > 2)
                
                    switch(opcion3){
                        case 1:
                            carrito = 0
                            alert(`¡Gracias por su compra! \nLo esperamos con su pedido por caja`)
                            break
                        default:
                            break
                    }
                    break
                case 3:
                    do { 
                        totalEn3 = (dividir(multiplicar(total, 1.15), 3)).toFixed(2)
                        totalEn6 = (dividir(multiplicar(total, 1.25),  6)).toFixed(2)
                        totalEn12 = (dividir (multiplicar(total, 1.35), 12)).toFixed(2)

                        opcion3 = parseInt(prompt(`Su total de compra es $${total} \nLas cuotas disponibles son: \n1 cuota de $${total} \n3 cuotas de $${totalEn3} \n6 cuotas de $${totalEn6} \n12 cuotas de $${totalEn12} \n\n¿Desea continuar? \n1 - Si \n2 - No`))
                    
                        if(isNaN(opcion3) || opcion3 < 1 || opcion3 > 2){
                            alert("Opción no válida")
                        }
                    } while (isNaN(opcion3) || opcion3 < 0 || opcion3 > 2)
                
                    switch(opcion3){
                        case 1:
                            carrito = 0
                            alert(`¡Gracias por su compra! \nLo esperamos con su pedido por caja`)
                            break
                        default:
                            break
                    }
                    break
                default:
                    break
            }
            break
    
        case 0:
            alert("Gracias por visitarnos")
            break
    }

} while (isNaN(opcion1) || opcion1 < 0 || opcion1 ==1 || opcion1 == 2 || opcion1 > 2)