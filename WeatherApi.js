document.querySelector("h1").innerHTML = "Boston Weather Geeks 2000"

//°F =(K - 273.15)* 1.8000 + 32.00
//seth: 8d71539d26c8f7a96fb717f3e71f6023
// Boston Coordinate
// 42.3601° N, -71.0589° W
//42.3601, -71.0589
// https://www.weather.gov/documentation/services-web-api
// https://api.weather.gov/points/39.7456,-97.0892
// https://forecast-v3.weather.gov/documentation
//
// fetch("https://api.weather.gov/points/42.3601,-71.0589")
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//         console.log(response.properties.forecast)
//         // console.log(response.properties.forecast.properties.periods.temperature)
//
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });




// DARKSKY API
// fetch("https://api.darksky.net/forecast/8d71539d26c8f7a96fb717f3e71f6023/37.8267,-122.4233")
// ERROR
// Access to fetch at 'https://api.darksky.net/forecast/8d71539d26c8f7a96fb717f3e71f6023/37.8267,-122.4233' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.



// 2nd attempt DARK SKY
// Johann's account, flying_maggot@hotmail.com
// https://darksky.net/dev
// secret API key
// 08ccc64c5673bf674f729f838d59756a
// https://api.darksky.net/forecast/08ccc64c5673bf674f729f838d59756a/37.8267,-122.4233
// Access to fetch at 'https://api.darksky.net/forecast/08ccc64c5673bf674f729f838d59756a/37.8267,-122.4233' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
// error TypeError: Failed to fetch
// 7.5.GroupWeatherClickBostonFahrenheit.js:19 Cross-Origin Read Blocking (CORB) blocked cross-origin response https://api.darksky.net/forecast/08ccc64c5673bf674f729f838d59756a/37.8267,-122.4233 with MIME type application/json. See https://www.chromestatus.com/feature/5629709824032768 for more details.

// fetch("https://api.darksky.net/forecast/08ccc64c5673bf674f729f838d59756a/37.8267,-122.4233")
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });



// OPEN WEATHER MAP API
// https://openweathermap.org/api
// https://openweathermap.org/appid
// https://openweathermap.org/appid#use
// API call:
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
// Parameters:
// APPID {APIKEY} is your unique API key
// Example of API call:
// api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
//
// API KEY
// 408ed3076a7c1b01ae64d051a21df0a0
// flying_maggot@hotmail.com

// fetch("https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=408ed3076a7c1b01ae64d051a21df0a0")
document.querySelector("button").addEventListener("click",function(){
  let city = document.querySelector("#city").value
  let country = document.querySelector("#country").value
  console.log(city)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=408ed3076a7c1b01ae64d051a21df0a0`)

  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    console.log(response)
    let kelvin = response.main.temp
    let fahrenheit = (kelvin-273.15)*(9/5) + 32
    // °F =(K - 273.15)* 1.8000 + 32.00
    fahrenheit = Math.round(fahrenheit)
    document.querySelector("h3").innerHTML = `${fahrenheit}&#8457 Fahrenheit`
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });
})
