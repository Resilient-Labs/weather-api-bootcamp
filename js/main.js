let key = '5c601f60649e4273785048d62e6a923d'

let city  //"Boston"
let state  //"MA"
let country  //"US"



document.querySelector(`#btn`).addEventListener("click", (e) => { getUserLocation() })


function getUserLocation(){

  city = document.querySelector(`#city-name`).value 
  state = document.querySelector(`#state-name`).value
  country = document.querySelector(`#country-name`).value

  city.toLowerCase()
  state.toLowerCase()
  country.toLowerCase()

  getWeather()
}

function getWeather(){

fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${key}&units=imperial&lang= en`)

    .then(msg => msg.json()) 

    .then(response => {

    document.querySelector(`#temp`).textContent = `${response.main.temp}` // displays temp to the DOM
    document.querySelector(`#unit`).style.display =`block`                // unit(F) appears on the DOM

    })


    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, your location is not in our records")

    });


}
  