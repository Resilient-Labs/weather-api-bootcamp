document.querySelector('button').addEventListener('click', getWeather)



function getWeather(){
    const city = document.querySelector('#city').value.replace(/\s/g, '')
    const country = document.querySelector('#country').value.replace(/\s/g, '')
    const zipcode = document.querySelector('#zipcode').value
    const picture = document.querySelector('img')
    const section = document.querySelector('section')
    picture.style.width = '100px'
    picture.style.height = '100px'
    section.style.backgroundColor = ' hsla(212, 51%, 56%, 0.581)'


    const url = `http://api.weatherstack.com/current?access_key=6dca4a8ead43d814c0b9d59ed7540130&query=query=${city},${country},${zipcode}&units=f`
    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let temperature = data.current.temperature
            let weather = data.current.weather_descriptions
            let icon = data.current.weather_icons
            document.querySelector('#weather').innerHTML = `The weather is currently ${weather}`
            document.querySelector('#icons').src = icon
            document.querySelector('#temperature').innerHTML = `${temperature}°F`
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}