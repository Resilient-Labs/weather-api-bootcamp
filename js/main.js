//add event listener to run function
document.querySelector("#submit").addEventListener("click", weather)
// create function + declare variables for search engine
function weather(){
    let city = document.querySelector('#city').value
    let state = document.querySelector('#state').value
    let country = document.querySelector('#country').value
    let location = city + "," + state + "," + country
    const url = ("https://api.openweathermap.org/data/2.5/weather?q=" + `${location}` + "&appid=8e37e0e37b476f14c46db6be201f5f73")

fetch(url)
.then(res => res.json()) 
.then(data => {
kelvinToFarenheit(data.main.temp)
})
}
// convert Kelvin to farenheit using math.floor to return correct integar given (tempature)
function kelvinToFarenheit(k){
    let city = document.querySelector('#city').value
    kToF = Math.floor((k - 273.15) * 9/5 + 32)
    document.querySelector("#temperature").innerText = 'The temperature in ' + city.toString() + ' is ' + kToF
}