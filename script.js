const API = 'bd6bee8e687162088de11023a2dc05ed'

const city = document.querySelector('#city')
const country = document.querySelector('#country')

const button = document.querySelector('button').addEventListener('click', getWeather)



function getWeather(){

    let cityVal = city.value 
    let countryVal = country.value


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal},${countryVal}&units=imperial&appid=${API}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = `${data.main.temp} F`
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}
