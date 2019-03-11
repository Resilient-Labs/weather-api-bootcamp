document.querySelector('form').addEventListener('submit', weather)
function weather(e){
  e.preventDefault()
  let city = document.querySelector('#city').value,
  country = document.querySelector('#country').value;
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}?id=524901&APPID=83b5ead3b53a324059684ddae4a6776a`)
   .then(response=> response.json())
   .then(weather => {
     document.querySelector("#temp").innerHTML = convert(weather.main.temp, city, country)
   });
}
function convert(temp, cit, coun){
  let cel = Math.round(temp - 273),
  far = Math.round((1.8 * cel) + 32) + "&#8457";
 return `The temperature in ${cit}, ${coun} is ${far} or ${cel}&#8451;`}
