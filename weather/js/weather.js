document.querySelector("form").addEventListener("submit", weather)

function weather(e){
  e.preventDefault()
  let city = document.querySelector("#city").value
  let country = document.querySelector("#country").value
  console.log(city, country);

  const apiKey = "a73cdef853649fa70c45353d1fedbdad"

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?id=524901&APPID=${apiKey}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson)
      document.querySelector("#temp").innerHTML = kelToFar(myJson.main.temp) + "&#8457;"
      console.log(JSON.stringify(myJson));
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })
}

function kelToFar(temp){
  let cel = temp - 273 // from kelvin to celcius
  let far = Math.round((1.8 * cel) + 32)
  return far
}
