//Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector("button").addEventListener("click", getWeather)

function getWeather() {
    let city = document.querySelector(".city").value
    let country = document.querySelector(".country").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=[Key]`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.name.toUpperCase === city.toUpperCase && data.sys.country === country.toUpperCase()) { //ensure the input is properly formatted for api
                let tempInKelvin = data.main.temp
                let tempInFahrenheit = (tempInKelvin - 273.15) * 1.8 + 32 //api returns in Kelvin, so I need conversion
                document.querySelector("h2").innerText = `Temperature: ${tempInFahrenheit.toFixed(2)} °F`
                document.querySelector("h3").innerText = data.name + ", " + data.sys.country
            } else {
                document.querySelector("h2").innerText = "No matching data found" //if fields are not populated or no matching data
                document.querySelector("h3").innerText = ""
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
