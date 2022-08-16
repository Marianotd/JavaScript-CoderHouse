const divDolar = document.getElementById("divDolar")

function consultarDolar() {
    fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(({oficial, solidario, blue, mep, ccb, ccl}) => {
        divDolar.innerHTML = `
            <div>
                <h2>Cotizaciones del dolar</h2>
                <p>Oficial: $${oficial}</p>
                <p>Solidario: $${solidario}</p>
                <p>Blue: $${blue}</p>
                <p>MEP: $${mep}</p>
                <p>CCB: $${ccb}</p>
                <p>CCL: $${ccl}</p>
            </div>
        `
    }) 
}

consultarDolar()

setInterval(() => {
    consultarDolar()
}, 30000 );



