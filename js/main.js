document.querySelector('button').addEventListener('click', todaysWeather)


function todaysWeather() {

    let val = document.querySelector('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&units=imperial&appid=15959b4b3e8c6f98e779c9767d5a02c0`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = `${data.main.temp} F`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
