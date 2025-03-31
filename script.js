document.querySelector('.submit').addEventListener('click', getWeather)

const APIKEY = 'a791c44c5cb11f39e6d763bfaffd8caf'

function getWeather() {
    let currentCityWeather = document.querySelector('.city').value
    let currentCountryWeather = document.querySelector('.country').value
    let currentTemperature = document.querySelector('.temperature').value
    let currentTime = document.querySelector('.time').value

    fetch(`https://api.weatherstack.com/current?access_key=${APIKEY}&query=${currentCityWeather}&units=f`)

        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('.city').innerText = data.location.name
            document.querySelector('.country').innerText = data.location.country
            document.querySelector('.temperature').innerText = data.current.temperature
            document.querySelector('.time').innerText = data.current.observation_time
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}