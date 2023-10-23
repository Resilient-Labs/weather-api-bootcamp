document.querySelector('h2').innerText = new Date()
    .toLocaleDateString(undefined, {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'})

document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
    let location = document.querySelector('input').value
    let city = location.split(',')[0]
    let country = location.split(',')[1]

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=1c58a50750e6d40896a21e813664de93`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        let kelvin = data.main.temp
        let fahrenheit = kelvin * 9/5 - 459.67
        fahrenheit = Math.round(fahrenheit * 10) / 10 //round to nearest tenth
        document.querySelector('#temperature').innerText = `${fahrenheit} °F`

        document.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

        document.querySelector('#description').innerText = data.weather[0].description
    })
    
    .catch(err => {
        console.log(`error ${err}`)
    })
}