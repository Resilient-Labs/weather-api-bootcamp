document.querySelector('form').addEventListener('submit', weather)

function weather(e){
  e.preventDefault()
  let city = document.querySelector('#city').value
  let country = document.querySelector('#country').value

 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?id=524901&APPID=817fd2b572e43472215e6f75af021b34`)
   .then(function(response) {
     return response.json();
   })
   .then(function(myJson) {
     document.querySelector("#temp").innerHTML = `${city}, ${country}` + kelToFar(myJson.main.temp)
   });
}

function kelToFar(temp){
 let cel = temp - 273 // from kelvin to celcius
 let far = Math.round((1.8 * cel) + 32) + "&#8457"
 return far
}
