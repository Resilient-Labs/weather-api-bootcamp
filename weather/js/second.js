document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
    let selection = document.querySelector("input").value

    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${selection}&appid=8ff875d99eacc16b6055ea4f85ef5bb5&units`)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let tempF = (data.main.temp - 273.15) * 9 / 5 + 32;
            document.querySelector('h2').innerText = tempF.toFixed(2) + "°F";
            // document.querySelector('h3').innerText = data.explanation
            // document.querySelector('img').src = data.
            console.log(data.main.temp)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}