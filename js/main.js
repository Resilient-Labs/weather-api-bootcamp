// WeatherApi.button.addEventListener('click', WeatherApi.getTemp);
  let WeatherApi = {
    button: document.querySelector('button'),
    getTemp: () => {
    const input = document.querySelector('input').value;
    //Subtract 273.15, multiply by 1.8, then add 32.
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=e71acf2c8f36d9b1df7f78ba278857d3`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
        console.log(response)
        let fahrenheit = Math.floor((response.main.temp - 273.15) * 1.8 + 32) + "°F";
        document.querySelector('span').textContent = fahrenheit;
        })
        .catch(err => {
          console.log(`error ${err}`);
          alert("sorry, there are no results for your search");
        })
      }
    }

  WeatherApi.button.addEventListener('click', WeatherApi.getTemp);
