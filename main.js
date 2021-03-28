document.querySelector('button').addEventListener('click',checkTemp)

function checkTemp(){

  let city = document.querySelector("[placeholder='City']").value
  let state = document.querySelector("[placeholder='State']").value
  let country = document.querySelector("[placeholder='Country']").value

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country},&units=imperial&appid=3dcf2283444af6b2ce53add6e21f45c9
`
  console.log(url);

  fetch(url)
    .then(res => res.json())
    .then(data => {

      console.log(data);
      console.log(data.weather[0].description);

      document.querySelector('#theWeather').innerText = data.main.temp
      document.querySelector('#description').innerText = data.weather[0].description
      document.querySelector('#theCity').innerText = data.name

    })
}
// let test = 2
// let gu =
