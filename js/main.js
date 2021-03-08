
//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit//
//https://openweathermap.org/current//
document.querySelector('button').addEventListener('click',checkTemp)

function checkTemp(){

  let city = document.querySelector("[name='city']").value
  let state = document.querySelector("[name='state']").value
  let country = document.querySelector("[name='country']").value


  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country},&units=imperial&appid=b4a8249fdb18e85af658ae914f292e78`
  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      document.querySelector('span').innerText = data.main.temp + " °F"
    })

}
