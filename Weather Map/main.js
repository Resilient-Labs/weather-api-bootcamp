document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
    const city = document.querySelector('input').value
    console.log(city)
    fetch(`https://api.weatherstack.com/current?access_key=2e48e1d2e1840f67045fc31edc635041&query=${city}&units=f`)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      document.getElementById('weather').innerText = `Weather in ${[ data.location.name , data.location.region,]}`
      document.querySelector('img').src = data.current.weather_icons
      document.getElementById('weatherdsc').innerText = data.current.weather_descriptions
      document.getElementById('temp').innerText = data.current.temperature
      document.getElementById('feels').innerText = data.current.feelslike
      document.getElementById('humidity').innerText = data.current.humidity
      document.getElementById('vis').innerText = data.current.visibility
      document.getElementById('precip').innerText = data.current.precip
    
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    })
}