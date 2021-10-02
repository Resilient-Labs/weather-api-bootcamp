document.querySelector("#submit").addEventListener("click", weather)

function weather(){
    let city = document.querySelector('#city').value
    let state = document.querySelector('#state').value
    let country = document.querySelector('#country').value
    let location = city + "," + state + "," + country
    const url = ("https://api.openweathermap.org/data/2.5/weather?q=" + `${location}` + "&appid()")
    

fetch(url)
.then(res => res.json()) 
.then(data => {
kelvinToFarenheit(data.main.temp)
})
}

function kelvinToFarenheit(k){
    let city = document.querySelector('#city').value
    kToF = Math.floor((k - 273.15) * 9/5 + 32)
    document.querySelector("#returnedTemp").innerText = 'The temperature in ' + city.toString() + ' is ' + kToF
}
