function weatherResult () {
  let userAnswer = document.querySelector("input").value
  document.querySelector("input").value = ""
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userAnswer}&APPID=df7edb7acc9a597b383fa0436d9474d2`)
  .then(res => res.json())
  .then(response => {
    let fahrenheit = Math.floor((response.main.temp - 273.15) * 1.8 + 32) + "F" + "°";
    document.getElementById("result").textContent = fahrenheit;
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("Sorry, there are no results for your search")
  });
}

document.querySelector("button").addEventListener('click', (e) => {
    weatherResult()
})
document.querySelector("input").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    weatherResult()
  }
})
