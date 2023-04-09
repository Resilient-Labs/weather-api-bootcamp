document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
    let selection = document.querySelector("input").value
    let country = document.querySelector("#countryInput").value
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${selection},${country}&appid=8ff875d99eacc16b6055ea4f85ef5bb5&units`);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.name.toUpperCase === selection.toUpperCase && data.sys.country === country.toUpperCase()) {
                let tempF = (data.main.temp - 273.15) * 9 / 5 + 32;
                document.querySelector('h2').innerText = tempF.toFixed(2) + "°F";
                document.querySelector('h3').innerText = data.sys.country
            } else {
                document.querySelector("h2").innerText = "No matching data found"
                document.querySelector("h3").innerText = ""
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
