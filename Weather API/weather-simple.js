const jawn = document.querySelector(".city");
const jawnTwo = document.querySelector(".country");
//take jawns (city and country) and submit them for check//
document.querySelector(".checkWeather").addEventListener("click", cycleWeather);

function cycleWeather() {
  let location = jawn.value + "," + jawnTwo.value;
  console.log(location);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9be71a0b2ed32a7a51110733427b633d`
  )
    .then((res) => res.json())
    .then((data) => {
        console.log("Data for API",data)
      farenheitConverter(data.main.temp);
    });
}

function farenheitConverter(kelvin) {
    const result = String(Math.floor(kelvin - 273 )) + "C";
    document.getElementById("output").innerText = result
}
