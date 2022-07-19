const sumar = (num1, num2) => num1 + num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

function sumarCarrito(carrito) {
    carritoImportes = carrito.map(producto => producto.precio)

    carritoImportes.forEach(producto => {
        acumuladorImportes += producto
    })
    
    acumuladorImportes = carritoImportes.reduce((prev, act) => prev + act, 0)
}

function vaciarCarrito() {
    detalleCarrito = carrito.slice(0, carrito.length)
    carrito.splice(0, carrito.length)
    acumuladorImportes = 0
}

let opcion1, opcion2, opcion3, productoNombre, productoPrecio, carritoImportes, detalleCarrito, acumuladorImportes = 0, IVA = 0, total = 0, totalen3 = 0, totalEn6 = 0, totalEn12 = 0
const carrito = []

class Producto {
    constructor(id, nombre, marca, categoria, precio) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.categoria = categoria
        this.precio = precio
    }
}

const producto1 = new Producto(1, "Zapatillas adidas X9000L2 M", "Adidas", "Zapatillas", 25999)
const producto2 = new Producto(2, "Campera Essentials Small Logo Fz Puma", "Puma", "Camperas", 15009)
const producto3 = new Producto(3, "Mallas Short Paul Hombre Fila", "Fila", "Pantalones", 24999)
const producto4 = new Producto(4, "Mochila Logo Cartus Kappa", "Kappa", "Accesorios", 6899)
const producto5 = new Producto(5, "Gorra Grays Hockey", "Grays", "Accesorios", 3999)
const producto6 = new Producto(6, "Guantes Fit Drb Force DRB", "DRB", "Accesorios", 4069)
const producto7 = new Producto(7, "Medias Invisible Sneaker 3p Puma", "Puma", "Ropa interior", 2539)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]

do { 
    opcion1 = parseInt(prompt(`Bienvenido \nIngrese una opción para continuar: \n1 - Ver productos \n2 - Ver carrito \n0 - Salir`))

    if(isNaN(opcion1) || opcion1 < 0 || opcion1 > 2){
        alert("Opción no válida")
    }

    switch(opcion1){
        case 1:
            do { 
                opcion2 = parseInt(prompt(`Seleccione el producto que desea comprar: \n1 - ${producto1.nombre} - $${producto1.precio} \n2 - ${producto2.nombre} - $${producto2.precio} \n3 - ${producto3.nombre} - $${producto3.precio} \n4 - ${producto4.nombre} - $${producto4.precio} \n5 - ${producto5.nombre} - $${producto5.precio} \n6 - ${producto6.nombre} - $${producto6.precio} \n7 - ${producto7.nombre} - $${producto7.precio} \n0 - Volver atrás`))
            
                if(isNaN(opcion2) || opcion2 < 0 || opcion2 > 7){
                    alert("Opción no válida")
                }
            } while (isNaN(opcion2) || opcion2 < 0 || opcion2 > 7)
        
            switch(opcion2){
                case 1:
                    carrito.push(productos[0])
                    productos[0].cantidadComprada ++
                    sumarCarrito(carrito)
                    alert(`¡Producto añadido al carrito! \nSu subtotal de compra es $${acumuladorImportes}`)
                    break
                case 2:
                    carrito.push(productos[1])
                    productos[0].cantidadComprada ++
                    sumarCarrito(carrito)
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${acumuladorImportes}`)
                    break
                case 3:
                    carrito.push(productos[2])
                    productos[0].cantidadComprada ++
                    sumarCarrito(carrito)
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${acumuladorImportes}`)
                    break
                case 4:
                    carrito.push(productos[3])
                    productos[0].cantidadComprada ++
                    sumarCarrito(carrito)
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${acumuladorImportes}`)
                    break
                case 5:
                    carrito.push(productos[4])
                    productos[0].cantidadComprada ++
                    sumarCarrito(carrito)
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${acumuladorImportes}`)
                    break
                case 6:
                    carrito.push(productos[5])
                    productos[0].cantidadComprada ++
                    sumarCarrito(carrito)
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${acumuladorImportes}`)
                    break
                case 7:
                    carrito.push(productos[6])
                    productos[0].cantidadComprada ++
                    sumarCarrito(carrito)
                    alert(`Producto añadido al carrito \nSu subtotal de compra es $${acumuladorImportes}`)
                    break
                default:
                    break
            }
            break
    
        case 2:
            IVA = multiplicar(acumuladorImportes, 0.21)
            total = sumar(acumuladorImportes, IVA)
            alert(`Detalle de compra: \nSubtotal productos: $${acumuladorImportes} \nIVA $${IVA} \nTotal $${total}`)

            if(carrito.length == 0) {
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
                            vaciarCarrito()
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
                            vaciarCarrito()
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
                            vaciarCarrito()
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

const divProductos = document.getElementById("carrito")

divProductos.innerHTML = ` 
        <h2 class="tituloCarrito">Detalle de productos comprados</h2>

    `

detalleCarrito.forEach(producto => {
    divProductos.innerHTML += `
        <div class="contenedorProducto" id="prodcuto${producto.id}">
            <h3 class="nombreProducto">${producto.nombre}</h3>
            <p>Marca: ${producto.marca}</p>
            <p>Categoria: ${producto.categoria}</p>
            <p>Precio: $${producto.precio}</p>
        </div>

    `
})

divProductos.innerHTML += ` 
        <h4>Vuelva prontos</h4>

    `