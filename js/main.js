document.querySelector('form').addEventListener('submit', weather)

function weather(e){
  e.preventDefault()
  let city = document.querySelector('#city').value
  let country = document.querySelector('#country').value

 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?id=67ab040222914eed2da06bf8ab669264`)
   .then(function(response) {
     return response.json();
   })
   .then(function(getJson) {
     document.querySelector("#temperature").innerHTML = kelToFarenheight(getJson.main.temp)
   });
}

function kelToFarenheight(temperature){
 let celsius = temperature - 273
 let farenheight = Math.round((1.8 * celsius) + 32) + "&#8457"
 return farenheight
}
