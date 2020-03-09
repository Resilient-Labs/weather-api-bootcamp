// alert("yo")
document.getElementById('getWeatherForecast').addEventListener('click', ()=>{
  let countryCode = document.getElementById('countryCode').value
  console.log(countryCode)
  let city = document.getElementById('city').value
  console.log(city)
  let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${countryCode},${city}&appid=b7a37814d1e80146a0aa9530cd757476&units=imperial`

  fetch(weatherApi)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)
        console.log(response.main.temp);
        document.getElementById('showWeather').innerHTML = response.main.temp
        document.getElementById('weatherConditions').innerHTML = response.main.humidity
        document.getElementById('tempMin').innerHTML = response.main.temp_min
        document.getElementById('tempMax').innerHTML = response.main.temp_max
        // if(response.main.temp > 70){
        //   document.getElementById('icon').src = response.main.temp
        // }

      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
})


// b7a37814d1e80146a0aa9530cd757476
// ?q={city name}&appid={b7a37814d1e80146a0aa9530cd757476}
// &units=imperial


        // if (response.main.temp > 15){
        //   fetch(weatherApi)
        //     .then(res => res.json())
        //     .then(response => {
        //       document.getElementById('showWeather').innerHTML = response.main.temp
        //     })
        // }
