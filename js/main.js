// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector('button').addEventListener('click', findTemp)

function findTemp() {
    const city = document.querySelector('#city').value
    const country = document.querySelector('#country').value
    const url = `http://api.weatherapi.com/v1/current.json?key=bd74c761729d46fe81a03455212909&q=${city}&country=${country}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = `${data.current.temp_f} F`
        })
        .catch(err => {
            console.log('error')
        })
}