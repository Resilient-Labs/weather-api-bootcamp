//sorry this is low effort css will be updated later

document.querySelector("button").addEventListener("click", getTemp);

function getTemp() {
  let city = document.querySelector("input").value;
  let url = `http://api.weatherstack.com/current?access_key=956d3456b9dff437a56cf26986f34f75&query=${city}`;

  //can place all parameters in same line
  //getting value from user at 6, passing that value using template literal
  //format in specific way so fetch call would know what to do (like nasa was date, this is query)

  fetch(url)
    .then(res => res.json())
    .then(location => {
      console.log(location)
      document.querySelector("h2").innerText = `${location.location.name}, ${location.location.region}, ${location.location.country}`
      document.querySelector("img").src = location.current.weather_icons[0]
      let ctof = location.current.temperature * (9 / 5) + 32
      let ctof2 = location.current.feelslike * (9 / 5) + 32
      document.querySelector("h3").innerText = `Temperature: ${ctof}, Precipitation: ${location.current.precip}, Feels Like: ${ctof2}, Humidity: ${location.current.humidity}`
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}