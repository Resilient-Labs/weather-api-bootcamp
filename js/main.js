//user will click for temp. and get back the weather from any country or city they type in, using API.


document.querySelector('button').addEventListener('click',getTemp)

function getTemp(){
  let place = document.querySelector('input').value
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=ff81ad6ef1a6f12e36a17450739fe51d `
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let convert = Math.floor((data.main.temp - 273.15) * 1.8 + 32)
      document.querySelector('#show').innerText = `${convert}`
      document.querySelector('#show').innerText = convert + '°F'
    })


    .catch(err => {

      console.log(`error ${err})`)


    })}
  
  
    document.querySelector('input').addEventListener('keypress',(e) =>{if (e.key === 'Enter'){
  }}
  )


   