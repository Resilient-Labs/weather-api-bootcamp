
document.querySelector('button').addEventListener("click", function() {
  const city = document.getElementById("city").value
  const country = document.getElementById("country").value
  const inputValue = city + ','+ country
  const display = city.charAt(0).toUpperCase() + city.slice(1);
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+`${inputValue}`+"&appid=efde7c3602e51e82abca166b2b3c6a2c")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      let fahrenheit = (response.main.temp - 273.15) * 9 / 5 + 32 // converts K to Farenheit
      document.getElementById('temp').innerHTML = Math.ceil(fahrenheit) + "&#176;" + "F"+ " in " + display
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });

});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
var monthName
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
today = monthNames[mm] + ' ' + dd + ', ' + yyyy;
document.getElementById('date').innerHTML = today
// sets date to today's date
