let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let apy_key = 'c2f3ab66d75fd1393ac32076d7f1214c'

let difKelvin = 273.15

let ciudad = 'Londres'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apy_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''
    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const description = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent =`${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorologica es: ${description}`

    divDatosClima.appendChild(ciudadTitulo)
    
    divDatosClima.appendChild(temperaturaInfo)
    
    divDatosClima.appendChild(descripcionInfo)
}




