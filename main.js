const temp = document.querySelector('#temp')
const submitBttn = document.querySelector('button')
const city = document.querySelector('#city')
const state = document.querySelector('#state')
const weatherCon = document.querySelector('#weather')

function getTemp(){
  let locationInput = document.querySelector('#yourLocation').value
  const url = `http://api.weatherapi.com/v1/current.json?key=cef4322d05d845d49ca11552230704&q=${locationInput}&aqi=no`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    city.innerText =  data.location.name
    state.innerText = data.location.region
    weatherCon.innerText = data.current.condition.text
    temp.innerText = data.current.temp_f
  })


}

submitBttn.addEventListener('click', getTemp)