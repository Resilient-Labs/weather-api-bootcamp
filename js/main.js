document.querySelector('button').addEventListener('click', getWeather) //selecting the button element from the html and making it run the function getWeather (which will be created in the following lines) when clicked

function getWeather(){
    let location = document.querySelector('input').value
    console.log(location)
    let url = `https://api.weatherapi.com/v1/current.json?key=fcaf8e958e904ef1bf1191928220305&q=${location}&aqi=yes`
    console.log(url)
    fetch(url)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        // console.log(data.current.condition.text)
        // console.log(data.current.condition.icon)
        // console.log(data.current.temp_f)
        // console.log(data.current.feelslike_f)
        // console.log(data.current.wind_dir)
        // console.log(data.current.wind_mph)
        // console.log(data.current.humidity)
        // console.log(data.current.last_updated)
        // console.log(data.current.precip_in)
        // console.log(data.location.country)
        // console.log(data.location.name)
        // console.log(data.location.region)

        document.querySelector('h2').innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`

        document.querySelector('img').src = data.current.condition.icon

        document.querySelector('h3').innerText = data.current.temp_f + '°'

        document.querySelector('p').innerText = data.current.condition.text

        document.querySelector('.feel') .innerText = `Last updated: ${data.current.last_updated}` 

        document.querySelector('.precip').innerText = `Precipitation: ${data.current.precip_in}"`

        document.querySelector('.humid').innerText = `Humidity: ${data.current.humidity}%`

        document.querySelector('.wind').innerText = `Wind ${data.current.wind_dir} @ ${data.current.wind_mph}mph`

        document.querySelector('.updated').innerText = `Last Updated: ${data.current.last_updated}`
    })
}

// fcaf8e958e904ef1bf1191928220305

// function getPhoto(){
//     let date = document.querySelector('input').value
//     console.log(date)
//     let url = `https://api.nasa.gov/planetary/apod?api_key=JKqBx7bTAjQqQZAZM15dUVOoqqfJXFRHVckqRlfL&date=${date}`
//     console.log(url)
//     fetch (url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('img').src = data.hdurl
//         document.querySelector('h3').innerText = data.explanation
//         document.querySelector('h2').innerText = data.title
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// }
