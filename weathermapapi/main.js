document.querySelector('button').addEventListener('click', getFairenheit)



function getFairenheit(){

    let zip = document.querySelector('.zip').value 
    fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=b693d258e415eaa845a58e47746d1d74`)
    .then(res => res.json())
    .then(weather =>{

        let lat = weather.lat
        let lon =weather.lon
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b693d258e415eaa845a58e47746d1d74`)
        .then(res => res.json())
        .then(currentWeather =>{

            console.log(currentWeather)

            let k = currentWeather.main.temp 
            let temp = 1.8*(k-273) + 32
            temp = Math.ceil(temp)
            console.log(temp)
            console.log(currentWeather.visibility)
            document.querySelector('.name').innerText = currentWeather.name
            document.querySelector('.temp').innerText = temp + ' Degrees Farenheit'
            document.querySelector('')

             let description = currentWeather.weather[0].description
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=k46lpa8QXu73qx6IYMqAVaNDOzw72Wlo&q="+${description}+"&limit=1&offset=0&rating=PG-13&lang=en`)
            .then(res => res.json())
            .then(weatherImage =>{
                console.log(weatherImage.data[0].images.fixed_height.url)
                document.querySelector('img').src = weatherImage.data[0].images.fixed_height.url
                
            }) 
        })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}