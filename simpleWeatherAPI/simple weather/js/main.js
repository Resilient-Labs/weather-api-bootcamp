document.getElementById('click').addEventListener("click", getTemp);
function getTemp(){
let city = document.querySelector('input').value.toString();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb4ecdd38c3439b05528644da6514911`) ////WHAT'S GOING TO MAKE THE API RUN? Is it o

    .then(response => response.json())
    .then(data => {
      console.log(data.main.temp)
      let fahrenheit= Math.round((data.main.temp - 273.15)*9/5+32)+ "°" + "F"

      document.querySelector('.reveal').innerHTML = fahrenheit; //how are we going to put fahrenheit in the DOM?
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("there are no results for your search")
  })
}
