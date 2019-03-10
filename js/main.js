//We want js to fetch api when a date is submitted
//Selected the place where we want the api to react from
document.querySelector("form").addEventListener("submit", cityWeather)
//inside the function cityWeather -- grabs the city and country input from the DOM

function cityWeather(e){
 e.preventDefault()
 //grabbing the value of the inputs from the dom
 let city = document.querySelector("#city").value
 let country = document.querySelector("#country").value
 
//my api key
 const apiKey = "059a2e49444b64c6bbf0895bc0ffd972"

 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?id=524901&APPID=${apiKey}`)
   .then(response => response.json())
   //Selecting #temp id in html replacing the information in it with conversion function
   .then(myJson => document.querySelector("#temp").innerHTML = conversion(myJson.main.temp))
   
}

function conversion(temp){
 let cel = temp - 273 // from kelvin to celcius
 let far = Math.round((1.8 * cel) + 32)
 return far
}

