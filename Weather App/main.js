
// APIKey= 307fa56d269647cca50172820221310



document.querySelector("button").addEventListener("click", myWeather);

function myWeather() {
    const zip= document.querySelector("#city").value;

    fetch(
      `http://api.weatherapi.com/v1/current.json?key=307fa56d269647cca50172820221310&q=${zip}&aqi=no`
    )
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        console.log(data);
        console.log(data.current);
        document.querySelector("#temp").innerText = data.current.temp_f;
        document.querySelector("#location").innerText = data.location.country;
        document.querySelector("#locationTwo").innerText = data.location.name;
        document.querySelector("#locationThree").innerText = data.location.region;
  

      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }


