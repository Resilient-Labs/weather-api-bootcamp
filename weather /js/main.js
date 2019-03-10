var city = document.getElementById('city').value;
var country = document.getElementById('country').value;

document.querySelector('form').addEventListener('submit', weather)
function weather(e){
  e.preventDefault()

  console.log(city);
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?id=524901&APPID=e688f364601ca0c358bb2ac99c5989f2`)
  .then(function(response) {
    return response.json();
  })
    .then(function(myJson) {
      document.getElementById('temp').innerHTML = celToFar(myJson.main.temp)
    });
 }
function celToFar(temp){
 let cel = temp - 273 // from kelvin to celcius
 let far = Math.round((1.8 * cel) + 32);
 return far
}
