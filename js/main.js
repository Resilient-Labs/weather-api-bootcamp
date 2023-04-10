const button = document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
  let userInput = document.querySelector('input').value
  let url = `http://api.weatherapi.com/v1/current.json?key=f16a6e44f6494fa4baa175942230504&q=${userInput}`
  
  fetch(url) 
  .then(res => res.json()) // parseresponse as JSON 
  .then(data => { 
    console.log(data)
    document.querySelector('h2').innerText = 'Country: ' + data.location.country
    document.querySelector('h3').innerText = 'City: '+ data.location.name
    document.querySelector('h4').innerText = 'State: ' + data.location.region
    document.querySelector('h5').innerText = 'Temperature: ' + data.current.temp_f + '°F'
  
  })

  .catch(err => { 
      console.log(`error ${err}`) 
  })
}