const button=document.querySelector('button')
const result=document.querySelector('#result')

let apiKey='301b012c99c591511450286e8bb6afe8'

button.addEventListener('click',()=>{
const city=document.querySelector('#city').value
const countryCode=document.querySelector('#countryCode').value.toLowerCase()
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${apiKey}`)
    .then(res=>res.json())
    .then(response=>{
      let far=Math.floor(response.main.temp * 9/5-459.67)
      let v=document.createTextNode(`${far}°F`)
      result.appendChild(v)
    })

    .catch(err=>{
      alert('Sorry, there are no results for your search.')
    })
})
