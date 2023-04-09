function getWeather(){
    let cityName = document.querySelector('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5cc27156d7dc5dc09ca2664556604c20`
    fetch(url)
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data)
        let kelvin = data.main.temp
        let fahrenhiet = Math.floor((kelvin - 273.15) * 1.8 + 32)
        document.querySelector('.city').innerText = data.name
        document.querySelector('.country').innerText = data.sys.country
        document.querySelector('h3').innerText = `Its going to be ${fahrenhiet}° F`
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}
document.querySelector('button').addEventListener('click', getWeather)

