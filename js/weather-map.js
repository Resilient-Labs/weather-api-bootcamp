
const apiKey = '886253015f3a5914e02ad47976fa18d1'

document.querySelector('button').addEventListener('click', weatherMap)



function weatherMap() {
  let cityName = document.querySelector('#cityInput').value
  let countryCode = document.querySelector('#countryInput').value

  // https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=imperial
  
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},{state code},${countryCode}&appid=${apiKey}&units=imperial`)
    .then(res => res.json()) 
    .then(data => {


    // console.log(data)

    document.querySelector('h2').innerText = data.name
    document.querySelector('h3').innerText = data.main.temp

    })
    .catch(err => {
      console.log(`errors $(err)`)
    })


}