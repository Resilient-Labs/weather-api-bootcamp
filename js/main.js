document.querySelector('button').addEventListener('click', tellMeWeather)
const btn = document.querySelector('button')


function tellMeWeather() {
  let city = document.querySelector('input').value
  const key = '488a0f4271c04fb9a1221953230604'
  
  const url = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${key}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let location = data.location.name
      let region = data.location.region
      let temp = data.current.temp_f
      let country = data.location.country
      let time = data.location.localtime
      let feels = data.current.feelslike_f
document.querySelector('#temp').innerText = `The city of ${location}, ${region}, ${country} is ${temp}°F. Currently feels like ${feels}°F at ${time} local time. `


    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

