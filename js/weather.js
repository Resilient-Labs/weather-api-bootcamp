// find an weather API and allow the user to input a city to get the current temperature.

//find a open source API
//  be able to input a city
//my key 177246f7ea794759b8b144355262209 


const searchBtn = document.querySelector('#button')
const resultsView = document.querySelector('#resultsBox')

searchBtn.addEventListener('click', tempWeather)

function tempWeather() {
    const inputVal = document.querySelector('#cityInput').value

    const url = `https://api.weatherapi.com/v1/current.json?key=177246f7ea794759b8b144355262209&q=${inputVal}&aqi=yes`

    fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
        

            document.querySelector('#country').innerText = data.location.country
            document.querySelector('#city').innerText = data.location.name
            document.querySelector('#cTemp').innerText = `${data.current.temp_c}°C`
            document.querySelector('#condition').innerText = data.current.condition.text
            document.querySelector('#weatherIcon').src = 'https:' + data.current.condition.icon
            document.querySelector('#feelsLike').innerText = `${data.current.feelslike_c}°C`
            document.querySelector('#humidity').innerText = `${data.current.humidity}%`
            
            // HAD TO SEPERATE THE DATE AND TIME TO TARGET THEM SEPERATELY
            const localTime = `${data.location.localtime}`
            console.log(localTime)
            
            const [date, time] = localTime.split(' ')
            console.log(date)
            console.log(time) 
            document.querySelector('#time').innerText = `${time}`
            document.querySelector('#date').innerText = `${date}`

            resultsBox.style.display = 'block'
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
} 
 
//localtime .location.localtime

