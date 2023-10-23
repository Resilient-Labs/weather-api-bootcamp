document.querySelector('button').addEventListener('click', getWeather)

function getWeather(e) {
    e.preventDefault()

    const cityInput = document.querySelector('input').value

    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${cityInput}&apikey=zA8sZCvmDlUDIETwtLhN3P7FvyKXENcY`




    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.location.name)//checking if I have the full location correctly
            const fullLocationName = data.location.name
            document.querySelector('h2').innerText = `The temperature in ${fullLocationName} is currently: ` + (Number.parseFloat(data.data.values.temperature * 1.8) + 32).toFixed(2) + ' Degrees Fahrenheit'
            document.querySelector('h3').innerText = `The humidity there is currently: ` + data.data.values.humidity + '%'
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
