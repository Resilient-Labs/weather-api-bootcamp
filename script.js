//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector("button").addEventListener("click", search);

function search() {
  const locationInput = document.getElementById("location").value;
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&limit=1&appid=f0f1935104d472391d80af21c332dabc`;

  // Grabbing the geocoding info from the API
  fetch(geoUrl)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // document.querySelector("h3").innerText = data
      let longitude = data[0].lon;
      let lattitude = data[0].lat;
      console.log(`${longitude}, ${lattitude}`);

      //Grabbing the weather data from the API using longitude and lattitude from previous request.
      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=f0f1935104d472391d80af21c332dabc`;

      fetch(weatherUrl)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          let kelvinTemp = data.main.temp;
          //Kelvin to farenhieght formukla
          let fareTemp = (9 / 5) * (kelvinTemp - 273) + 32;
          let roundedTemp = Math.round(fareTemp);
          let finalTemp = roundedTemp + " ° F"
          document.querySelector("h2").innerText = finalTemp;

        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
