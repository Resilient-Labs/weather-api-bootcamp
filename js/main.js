
document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
  const city = document.querySelector('#cityInput').value
  const country = document.querySelector('#countryInput').value


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},state,${country}&units=imperial&appid=203664390ed3e99924aa214f81e452a6`

  fetch(url)
  .then (res => res.json())
  .then (data => {
    console.log(data)
    const temp = data.main.temp
    const tempFeel = data.main.feels_like
    const sky = data.weather[0].description
    const cityResponse = data.name
    const countryResponse = data.sys.country

    document.querySelector('#temp').innerText = temp
    document.querySelector('#location').innerText = cityResponse + ' ' + countryResponse
    document.querySelector('#weatherFeel').innerText = tempFeel
    document.querySelector('#skyCondition').innerText = sky


  })
  .catch(err => {
    console.log(`error ${err}`)
  })

}
