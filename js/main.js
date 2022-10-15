
document.querySelector('button').addEventListener('click', getTemperature)

function getTemperature(){
    const apiKey = '2f4aec935846428c9d8ea81a749539b4'
    let baseUrl = 'http://api.openweathermap.org/'
    
    let city = document.querySelector('.city').value
    let country = document.querySelector('.country').value
    let geoUrl = `geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`
    fetch(`${baseUrl}${geoUrl}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let tempUrl = `data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=imperial`
        fetch(`${baseUrl}${tempUrl}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h3').innerText = `Temperature: ${data.main.temp}\u00B0F`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}



