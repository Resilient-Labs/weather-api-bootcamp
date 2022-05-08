//create a function that with a button we display the weather
//create an input of location to show weather in the inputed location
//location determine by city, country or zipcode
// F = 1.8 X (K -273.15) + 32

const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', getTemp)

function getTemp(e) {
    e.preventDefault()
    const zipcode = input.value
    // console.log(typeof zipcode)

    const urlGeo = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=f4221edf930e3945b38a5e8c64554341`

    fetch(urlGeo)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        let tempName = document.querySelector('#name')
        let tempTemp = document.querySelector('#temp')
        let tempHilo = document.querySelector('#hiLo')
        let tempHumid = document.querySelector('#humidity')
        let geoLat = data.lat
        let geoLon = data.lon
        const urlTemp = `https://api.openweathermap.org/data/2.5/weather?lat=${geoLat}&lon=${geoLon}&appid=f4221edf930e3945b38a5e8c64554341`

        fetch(urlTemp)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let temp = Math.round(1.8 * ((data.main.temp) -273.15) + 32)
                let tempMax = Math.round(1.8 * ((data.main.temp_max) -273.15) + 32)
                let tempMin = Math.round(1.8 * ((data.main.temp_min) -273.15) + 32)

                tempTemp.innerText = temp
                tempName.innerText = `City: ${data.name}`
                tempHilo.innerText = `Hi:${tempMax}/Lo:${tempMin}`
                tempHumid.innerText = `Humidity: ${data.main.humidity}`

            })
            .catch(err => {
                console.log(`error ${err}`)
        });

    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
