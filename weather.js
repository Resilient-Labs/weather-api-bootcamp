
document.querySelector('#locationBtn').addEventListener('click',findLocation)
// document.querySelector('#weatherBtn').addEventListener('click',getWeather)

function findLocation(){
  let location = document.querySelector('#locationVal').value
//   fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`)
//     .then(res => res.json())
//    .then(data => {
//       console.log(data)
//       let locData = data.results[0]
//       document.querySelector('#placeLoc').innerText=locData.name
//       document.querySelector('p').innerText=locData.country

// }) .catch(err => 
//   `error is ${err}`
// )
fetch(`http://api.weatherapi.com/v1/current.json?key=847b45097ab5449d802160206262209&q=${location}&aqi=no
`)
.then(res =>res.json())
.then(data => {
  console.log(data)
  let temp = data.current
  let locData = data.location
  console.log(temp)
  //let icon = temp.condition.icon.slice(2) `https:` + `${icon}`

  document.querySelector('#placeTemp').innerText= `It is ${temp.temp_f}°F  in`
     document.querySelector('img').src='https:' + temp.condition.icon
   document.querySelector('#placeName').innerText= locData.name + ','
  document.querySelector('#placeReg').innerText= locData.region
  document.querySelector('#placeCountry').innerText= `${locData.country} and is ${temp.condition.text}`



}
).catch(err => {
  `error is ${err}`
})

}


function getWeather(){
let weather = document.querySelector('#weatherVal').value
fetch


}