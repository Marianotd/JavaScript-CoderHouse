const divDolar = document.getElementById("divDolar")
const divClima = document.getElementById("divClima")
const formClima = document.getElementById("formClima")
const API_KEY = "6ba7fc116a9fa29f9688c16cfcb9ff06"


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








formClima.addEventListener("submit", (e) => {
    e.preventDefault()

    let datForm = new FormData(e.target)

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${datForm.get("ciudad")},${datForm.get("provincia")},${datForm.get("pais")}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        let {lat, lon, name, state, country} = data[0]

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${API_KEY}`)
            .then(response => response.json())
            .then(({main, weather}) => {
                let {feels_like: sensacionTermica, humidity: humedad, pressure: presion, temp} = main
                let descClima = weather[0].description

                divClima.innerHTML = `
                    <div>
                        <h2>Clima en ${name}</h2>
                        <p>Provincia: ${state}</p>
                        <p>Pais: ${country}</p>
                        <p>Temperatura: ${temp} °C</p>
                        <p>Sensación térmica: ${sensacionTermica} °C</p>
                        <p>Humedad: ${humedad} %</p>
                        <p>Presión: ${presion} hPa</p>
                        <p>Descripción: ${descClima}</p>
                    </div>
                `
            })
    })

})
