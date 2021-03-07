document.querySelector('button').addEventListener('click', getWeather)


function getWeather () {
  let cityName = document.querySelector('input').value
  document.querySelector('input').value = ""
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=75c496fe5ef191daed7b4989e9cc3a42`

  fetch(apiLink)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let fahrenheit = Math.round((data.main.temp - 273.15) * 1.8 + 32) + "F" + "°";
      document.getElementById("result").innerHTML = fahrenheit;

      let city = document.querySelector('h2').innerText = data.name
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert ("Sorry, no results for your search")
    })
}

document.querySelector("input").addEventListener("keypress", (e)=> {
  if(e.key === "Enter")
    getWeather()
  })
