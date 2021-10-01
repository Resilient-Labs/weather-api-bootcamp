//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector("#submit").addEventListener("click",weatherUpdate)
function weatherUpdate(){
  let city = document.querySelector('#city').value.trim()
  let state = document.querySelector('#state').value.trim()
  let country = document.querySelector('#country').value.trim()
  let weatherResult = document.querySelector ("#farenheit")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=c80d374d8e8db6c245e72375a13706cd`
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
console.log(data)
    document.querySelector('#deg').innerText=`${data.main.temp}°F`
    })
}