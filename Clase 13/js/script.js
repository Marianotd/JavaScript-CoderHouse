const boton1 = document.getElementById("boton1")

// Swal.fire({
//     icon: 'success',
//     title: 'Compra finalizada!',
//     text: 'Los productos se van a enviar a la brevedad',
// })

boton1.addEventListener("click", () => {
    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
})
