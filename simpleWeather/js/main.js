document.querySelector('button').addEventListener('click', getCity)

function getCity(){
  let cityVal = document.querySelector('input').value

  let url = `http://api.weatherapi.com/v1/current.json?key=3179d3c0541e425f8f7183737220305&q=${cityVal}&aqi=no`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('.temp').innerText = "Temp: " + data.current.temp_f
    document.querySelector('.feelsLike').innerText = "Feels Like: " + data.current.feelslike_f
    document.querySelector('.country').innerText = "Country: " + data.location.country
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
}

function getCountry(){
  
}