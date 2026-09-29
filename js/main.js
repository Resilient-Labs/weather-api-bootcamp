document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
    let city = document.querySelector('#city').value
    let state = document.querySelector('#state').value
    const api = "6799d49b22804fe3a6d180434262209"
    
    const url = `https://api.weatherapi.com/v1/current.json?key=6799d49b22804fe3a6d180434262209&q=${city},${state}`


        fetch(url)


        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            console.log(data.location.city)
            document.querySelector('h2').textContent = `${data.location.name}, ${data.location.region}`
            document.querySelector('h3').textContent = data.current.temp_f; 

        })



}


