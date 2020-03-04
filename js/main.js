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

  if (country.length > 2){

    alert("Enter your country abbreviation")


  }


  getWeather()

  console.log(city)
  console.log(state)
  console.log(country)
}

function getWeather(){

fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${key}&units=imperial&lang= en`)

    .then(msg => msg.json()) // parse response as JSON (can be res.text() for plain response)

    .then(response => {

    document.querySelector(`#temp`).textContent = `${response.main.temp}`
    
    //console.log(document.querySelector(`#unit`))
    document.querySelector(`#unit`).style.display =`inline`



 
    })


    .catch(err => {

        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });


}
  