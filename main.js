document.querySelector("#submit").addEventListener("click",weatherUpdate)

function weatherUpdate(){
  let city = document.querySelector('#city').value.trim()
  let state = document.querySelector('#state').value.trim()
  let country = document.querySelector('#country').value.trim()
  // let weatherResult = document.querySelector ("#farenheit")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=`


fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
console.log(data)
    document.querySelector('#farenheit').innerText=`${data.main.temp}`

    }) 
}