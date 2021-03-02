/********
Display weather
*********/
const apiKey = "fbea8d698fe7e925f696acf595912a03"
const url = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&`
const city = document.querySelector('#city')
const country = document.querySelector('#country')
const tempDisplay = document.querySelector('#tempDisplay')

document.querySelector('button').addEventListener('click', clicky)

function clicky() {
  fetch(url+`q=${city.value},${country.value}`)
    .then(res => res.json())
    // parse response as JSON
    .then(data => {
      console.log(data)
      let kelvinTemp = data.main.temp
      tempDisplay.innerText = 9/5 * kelvinTemp - 459.67
      //Fahrenheit = 	9/5	 * Kelvin - 459.67

    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
