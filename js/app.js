let input = document.querySelector('.input')
let button = document.querySelector('.button')
let temp = document.querySelector('.temp')
let name = document.querySelector('.name')
let desc = document.querySelector('.desc')
let form = document.querySelector('.form')

const fetchWeather = () =>{
  let userAnswer = input.value.replace(" ","%20")
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userAnswer}&appid=5c1cf367485c1c795577eb4d92bc8d49&units=imperial`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let nameValue = data.name;
    let tempValue = data.main.temp;
    let descValue = data.weather[0].description;

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue + '°';
    desc.innerHTML = descValue;
    input.value = "";

  })
}

button.addEventListener('click',fetchWeather);

button.addEventListener("keydown", event => {
  userAnswer = input.value;

  if (event.which === 13) {
    fetchWeather()
  }
});


form.addEventListener("submit", (event) => {
  event.preventDefault()
});
// //mdn
// const geoSuccess = (position) =>{
//   console.log(position)
//   fetchWeather
// }
// const geoError = (error) =>{
//   console.log(error.code)
//
// }
// const geoOptions= {
//   enableHighAccuracy: true,
//   timeout: 4000
// }
// navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
