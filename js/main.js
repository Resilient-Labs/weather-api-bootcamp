document.querySelector('button').addEventListener('click', getData)

function getData() {
  let cityName = document.querySelector('input').value
  // template literal
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=e680cb03b350a5d553108f026a1f23e4`
  fetch(apiLink)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      document.querySelector('h2').innerText= data.main.temp
      // document.querySelector('img').src = data.units
      // document.querySelector('h3').innerText = data.explanation
      //

      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
