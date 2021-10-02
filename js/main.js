document.querySelector('#button').addEventListener('click', searchWeather)

function searchWeather(){
  let city = document.querySelector('#city').value
  let state = document.querySelector('#state').value
  let country = document.querySelector('#country').value
  let location = city + "," + state + "," + country
  const url = ("https://api.openweathermap.org/data/2.5/weather?q=" + `${location}` + "&appid=7d5cbe693362dd5f1d98eb3d6e7640e9")


fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      kelvinToFarenheit(data.main.temp)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

function kelvinToFarenheit(k){
  let city = document.querySelector('#city').value
  kFar = Math.floor((k - 273.15) * 9/5 + 32)
  document.querySelector('#information').innerText = 'The temperature in ' + city + 'is ' + kFar + ' degrees'
}


//this code was worked on by Hayden 2
