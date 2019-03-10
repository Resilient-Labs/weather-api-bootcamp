document.querySelector("button").addEventListener("click", weather);

function weather() {
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  let location = city + "," + country;
  let apiKey = "0dd95279585fa816e64ce0646d398eb2";
  let apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=" +
    apiKey +
    "&units=imperial";
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("p").innerHTML =
        "The weather in " +
        location +
        " is " +
        response.main.temp +
        " degrees Fahrenheit.";
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, there are no results for your search");
    });
}
