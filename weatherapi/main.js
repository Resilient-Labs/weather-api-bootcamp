document.querySelector('button').addEventListener('click',getWeather)

function getWeather(){
    let location = document.querySelector('input').value
    let url=`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=a6a0cc58b72b359df4c76fcb96240664`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let lat= data[0].lat
        let lon= data[0].lon
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a6a0cc58b72b359df4c76fcb96240664`)
        .then(res => res.json())
        .then(currentWeather => {
            console.log(currentWeather)
            let k=currentWeather.main.temp
            let temp = 1.8 *(k-273) + 32
            temp =Math.ceil(temp)
            document.querySelector('h2').innerText=currentWeather.name
            document.querySelector('h3').innerText= temp + ' °F'
            
        
        })
    .catch(err => {
        console.log(`error ${err}`)
    })
})
}