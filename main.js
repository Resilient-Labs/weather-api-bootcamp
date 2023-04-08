//Global
let clear = document.querySelector("input");

//Function to access Weather API and displays the location and its current weather
function weatherTime() {
  let selection = document.querySelector("input").value; //Enter a location (City or State/Country)
  const url = `http://api.weatherapi.com/v1/current.json?key=730156fb7f704212a87155255230604&q=${selection}`;

  fetch(url)
    .then((res) => res.json()) //parse response as JSON
    .then((data) => {
      console.log(data);

      document.querySelector("h2").innerText = `The temperature in ${data.location.name}, ${data.location.region} is : ${data.current.temp_f} F`;
      document.querySelector(".displayP").innerText = `Country of Origin : ${data.location.country}`;
      
      //clears search bar.
      clear.value = "";
    })

    //in case of errors.
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// event listeners
document.querySelector("button").addEventListener("click", weatherTime);