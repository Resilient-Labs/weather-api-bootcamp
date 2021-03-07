// enter city and state and get the weather
document.querySelector('button').addEventListener('click',checkTemp)
function checkTemp(){
  let city = document.querySelector("#city").value
  let state = document.querySelector("#state").value
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},&units=imperial&appid=b4a8249fdb18e85af658ae914f292e78`
  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      document.querySelector('h3').innerText = `${data.main.temp}*F`
      document.querySelector('span').innerText = data.weather[0].description
    
    })
}
