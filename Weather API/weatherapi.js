//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

let skyInput = document.querySelector('#button').addEventListener('click', getWeather)
function getWeather(){
    const apiKey = '2054def1b491777f9f317e34fe0f9149'
    const weatherInput = document.querySelector('#weatherMe').value

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherInput}${weatherInput}${weatherInput}&units=imperial&appid=${apiKey}`
    console.log(url) 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.main.temp)
        document.querySelector("#state").innerText = data.main.temp
    })
    .catch(err => {
    console.log(`Error something went wrong.`)
    })
}