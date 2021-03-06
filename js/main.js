// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
document.querySelector("button").addEventListener("click", getWeather)
function getWeather(){
  let city = document.querySelector(".city").value
  let country = document.querySelector(".country").value

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=3c92daba6ae0bc37e9d2bea7e211cba0`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.querySelector("h2").innerText =`Location: ${data.name}, ${data.sys.country}`
    document.querySelector(".current").innerText = `Current Temperature: ${data.main.temp}℉`
    document.querySelector(".high").innerText = `High: ${data.main.temp_max}℉`
    document.querySelector(".low").innerText = `Low: ${data.main.temp_min}℉`
    document.querySelector(".sky").innerText = `${data.weather[0].main}`
    document.querySelector(".description").innerText = `${data.weather[0].description}`
  })
}
