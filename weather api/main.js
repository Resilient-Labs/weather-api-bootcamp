

const button=document.querySelector("#button")
const result=document.querySelector('#result')

let key='e7c585b428ccbab2374f86e9e8b04898'

button.addEventListener('click',()=>{
  const countrycode=document.querySelector('#countrycode').value
  const cityname=document.querySelector('#cityname').value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname},${countrycode}&APPID=${key}`)
  .then(res=>res.json())
  .then(response=>{
    let far=Math.floor(response.main.temp * 9/5-459.67)
    let v=document.createTextNode(far)
    result.appendChild(v)
    

}).catch(err=>{
  alert('Sorry')
})
})
