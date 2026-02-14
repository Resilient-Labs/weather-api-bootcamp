const apiKey = 'ae194c9fd4f9c372a84ee9d9568b0d6f'

document.querySelector('button').addEventListener('click',getWeather)


function getWeather(){
    const city = document.querySelector('#city').value
    const country = document.querySelector('#country').value

    //Marjorie provided a good API to use
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`)
        .then (res => res.json())
        .then(data => {
            console.log(data)
            const farenheight = (data.main.temp - 273.15) * 9/5 + 32
            document.querySelector('h2').innerHTML = `${farenheight.toFixed(2)}` + '&#8457;'
        })
        .catch(err => console.log(err))
}