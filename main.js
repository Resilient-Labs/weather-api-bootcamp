//
document.querySelector("#submit").addEventListener("click", weatherAPI)

function weatherAPI() {
  let city = document.querySelector('#city').value.trim()
  let state = document.querySelector('#state').value.trim()
  let country = document.querySelector('#country').value.trim()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=ff4ea2be4f4307f13e5e99647f66d3ab`

  fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
      // console.log(data)
      document.querySelector('#farenheit').innerText = `${data.main.temp}`

    })
}
