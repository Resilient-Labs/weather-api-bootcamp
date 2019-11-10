

const button=document.querySelector("#button")
let result=document.querySelector('#result')

let key='e7c585b428ccbab2374f86e9e8b04898'


button.addEventListener('click',()=>{

  let countrycode=document.querySelector('#countrycode').value
  let cityname=document.querySelector('#cityname').value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname},${countrycode}&APPID=${key}`)
  .then(res=>res.json())
  .then(response=>{
    let far=Math.floor(response.main.temp * 9/5-459.67)
      let v=document.createTextNode(`${far} degrees F `)
      result.appendChild(v)
      result=""



}).catch(err=>{
  alert('Enter New Address')
})
})
