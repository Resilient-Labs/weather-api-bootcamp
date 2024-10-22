//apikey: f0a6b788cb1ee4de86a49cdb39cc6c6d
https://api.openweathermap.org/data/2.5/weather?q=boston&appid=f0a6b788cb1ee4de86a49cdb39cc6c6d
document.querySelector('button').addEventListener('click', ()=>{
    let city = document.querySelector("#city").value
    let country = document.querySelector("#country").value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=f0a6b788cb1ee4de86a49cdb39cc6c6d&units=imperial`
    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
        console.log(data)
        document.querySelector('#result').innerText = Math.floor(data.main.temp) + "F"
    })

})