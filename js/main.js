
  let simpleWeatherApi = {
    button: document.querySelector('button'),
    fetchTemp: () => {
    const input = document.querySelector('input').value;
    //Subtract 273.15, multiply by 1.8, then add 32.
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=daa6b0a8372c977140eac725b46c81a4`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
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
