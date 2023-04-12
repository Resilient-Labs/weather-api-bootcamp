const butt = document.querySelector('#thebutt')

function findWeather(){

let city = document.querySelector('#city').value
let country = document.querySelector('#country').value
const url = (`https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=weatherAPI&include=minutely&units=I`)

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('#temp').innerText = data.data[0].app_temp
  })
  .catch(err => {
    alert(`error ${err}`)
  })
}
butt.addEventListener('click' , findWeather)