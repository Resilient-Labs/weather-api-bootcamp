//worked with Team Gardner

document.querySelector("button").addEventListener('click', calculate)
function calculate(){
    let place = document.querySelector(".myInput").value
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=imperial&appid=b63e2f9db34e2b9c2332cb18f8b3509c`
    fetch(apiLink)
    .then(res => res.json())
    .then(data => {
        document.querySelector('h2').innerText = data.name
        document.querySelector('h3').innerText = data.main.temp
        document.querySelector('h4').innerText = data.clouds.all
        document.querySelector('h5').innerText = data.wind.speed
        console.log(data)
        
    } )
    .catch(error =>{
        console.log(`${error} not found`)
    })
}