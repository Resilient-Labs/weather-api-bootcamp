// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
//id=524901&appid=b1b15e88fa797225412429c1c50c122a1
// var el= document.querySelector('btnInput');
// if(el){
//   el.addEventListener('submit', weather)
// }
// console.log(el);

function weather(e){
  e.preventDefault()
  let city = document.querySelector('#city').value
  let country = document.querySelector('#country').value




function weather(e){
  e.preventDefault()
  let city= document.querySelector('#cityInput').value
  let country= document.querySelector('#countryInput').value

 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?id={524901&appid=b1b15e88fa797225412429c1c50c122a1}`)
   .then(function(response) { 
     console.log(response);
     return response.json();
   })
   .then(function(myJson) {
     document.querySelector("#printTemp").innerHTML= kelToFar(myJson.main.temp)
   });
}

function kelToFar(temp){
 let cel= temp - 273 // from kelvin to celcius
 let far= Math.round((1.8 * cel) + 32)
 }

}
