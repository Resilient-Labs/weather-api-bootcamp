  const city= document.querySelector('#zipCode').value.toLowerCase()
  const btn = document.querySelector('#button')
  const result = document.querySelector('#result')
  const countryCode = document.querySelector('#countryCode').value.toLowerCase()
  const kaniahWeatherKey = "f19a8248f194b42ede93c241d275057b"

  btn.addEventListener('click', ()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${kaniahWeatherKey}`)
      .then(res => res.json())
      .then(response => {
        console.log(response.main.temp)
        const currentTemp = Math.floor(response.main.temp * 9/5-459.67)
        let textContent = document.createTextNode(currentTemp + "°F")
        result.appendChild(textContent)
      })
      .catch(err => {
        console.log(`error ${err}`)
        alert("sorry,there are no results for your search")
      })
  })
