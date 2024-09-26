const key = "83c180cda9c7dbed5e8d603bfa794bca"
const btn = document.querySelector('button')
let result = document.querySelector('#result')

btn.addEventListener("click", ()=>{
  const country = document.querySelector("#country").value
  const city = document.querySelector("#city").value

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${key}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    let temperature = Math.floor(response.main.temp * 9/5-459.67)
    let endResult = document.createTextNode(temperature)
      result.appendChild(endResult)
  
  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
    // document.querySelector('img').src = response.hdurl
})
