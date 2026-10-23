// Input city and country
// Get weather forecast for the day (temp and condition)
// Temp at that location is MVP (minimal viable product) >”current” adds more complexity
// Primary API - https://open-meteo.com/en/docs with GEOCODING- https://open-meteo.com/en/docs/geocoding-api
// Secondary API - https://www.weatherapi.com/ no lat and long though KEY - bc64d6b0e6d8470a841155228262309



document.querySelector('button').addEventListener('click', getCity)

// // function getCity (){
// // fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
// //     .then((response) => response.json())
// //     .then((data) => {
// //         // console.log(data)
// //     })
// // }

function getCity (){
let city = document.querySelector("#cityInput").value



fetch(`http://api.weatherapi.com/v1/current.json?key=bc64d6b0e6d8470a841155228262309&q=${city}&aqi=no`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.querySelector('#condition').innerText = data.current.condition.text
        document.querySelector('#temp').innerText = data.current.temp_f + "℉"
        document.querySelector('#feel').innerText = data.current.feelslike_f + "℉"
        let link = data.current.condition.icon
        let icon = "https:" + link
        // console.log(icon)
        document.querySelector('#weatherIcon').src = `${icon}`
        console.log(icon)

        
    })
    
}