let degrees = document.querySelector('h2')
let input = document.querySelector('input')
let btn = document.querySelector('button')

btn.addEventListener('click', getWeather)





function getWeather(){
    let param = document.querySelector('input').value
    let url =`http://api.weatherapi.com/v1/current.json?key=3559e27283e9401dbd2175933230504&q=${param}`



    fetch(url)
    .then(res => res.json()) //get json
    .then(data =>{
        console.log(data)
        degrees.innerText =`the Tempature in ${data.location.name}, ${data.location.country} is ${data.current.temp_f} ° Fahrenheit`

    })

}