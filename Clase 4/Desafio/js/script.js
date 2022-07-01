// PRUEBA DE FUNCIONAMIENTO CARRITO BÁSICO
const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

let opcion1, opcion2, opcion3, carrito = 0, IVA = 0, total = 0, totalen3 = 0, totalEn6 = 0, totalEn12 = 0
let producto1 = 25999
let producto2 = 11499
let producto3 = 24999
let producto4 = 17999

do { 
    opcion1 = parseInt(prompt(`Bienvenido \nIngrese una opción para continuar: \n1 - Ver productos \n2 - Ver carrito \n0 - Salir`))

    if(isNaN(opcion1) || opcion1 < 0 || opcion1 > 2){
        alert("Opción no válida")
    }

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
                    carrito += producto1
                    alert(`¡Producto añadido al carrito! \nSu subtotal de compra es $${carrito}`)
                    break
                case 2:
                    carrito += producto2
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${carrito}`)
                    break
                case 3:
                    carrito += producto3
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${carrito}`)
                    break
                case 4:
                    carrito += producto4
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${carrito}`)
                    break
                default:
                    break
            }
            break
    
        case 2:
            alert(`Detalle de compra: \nSubtotal productos: $${carrito} \nIVA $${IVA = multiplicar(carrito, 0.21)} \nTotal $${total = sumar(carrito, IVA)}`)

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