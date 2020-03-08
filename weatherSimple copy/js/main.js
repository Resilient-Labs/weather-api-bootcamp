
  let simpleWeatherApi = {
    button: document.querySelector('button'),
    fetchTemp: () => {
    const input = document.querySelector('input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=a792edb08dbc31353e15c3480d1ab603`)
        .then(res => res.json()) 
        .then(response => {
        console.log(response)
        let fahrenheit = Math.floor((response.main.temp - 273.15) * 1.8 + 32) + "F";
        document.getElementById("paragraph").textContent = fahrenheit;
        })
        .catch(err => {
          console.log(`error ${err}`);
          alert("sorry, there are no results for your search");
        })
      }
    }

  simpleWeatherApi.button.addEventListener('click', simpleWeatherApi.fetchTemp);
