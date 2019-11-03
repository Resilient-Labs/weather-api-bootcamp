// const city = document.querySelector('#city').value
// const countryCode = document.querySelector('#countryCode').value.toLowerCase()

// to do with it style, edge casing, and add text
const button = document.querySelector('button')
const result = document.querySelector('#result')
const resultLineBreak = document.querySelector('#result2')
let apiKey = "3be009a7c1a00f0ab0ebdac16e2e24e2"


button.addEventListener('click', ()=>{
const countryCode = document.querySelector('#countryCode').value.toLowerCase()
const city = document.querySelector('#city').value.toLowerCase()
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${apiKey}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      let currentDegreesToFaren = Math.floor(response.main.temp*9/5-459.67)
      let tempLowDegreesToFaren = Math.floor(response.main.temp_min*9/5-459.67)
      let tempHighDegreesToFaren = Math.floor(response.main.temp_max*9/5-459.67)
      let windSpeed = response.wind.speed
      let tempDescription = response.weather[0].description
      let info = document.createTextNode(`It is currently ${currentDegreesToFaren}° fahrenheit! ${tempDescription}`)
      let info2 = document.createTextNode(`
        Low temperatures of: ${tempLowDegreesToFaren}° | High temperatures of: ${tempHighDegreesToFaren}° |
                  Wind reaching a speed of: ${windSpeed} mph`)
      result.appendChild(info)
      resultLineBreak.appendChild(info2)
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})
