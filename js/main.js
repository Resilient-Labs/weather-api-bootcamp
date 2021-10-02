



document.querySelector('button').addEventListener('click', getTemperature)


function getTemperature(){
    let city = document.querySelector('.city').value
    let country = document.querySelector('.country').value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&units=imperial&appid=79c4538ad9c2990111aaf5f698f8df41`

    fetch(url) 
        .then(res => res.json()) // parse response as JSON 
        .then(data => { 
        console.log(data) 
        console.log(data.main.temp)
        let temperature = data.main.temp
        document.querySelector('h2').innerText = `The temperature is ${temperature} °F`
        }) 
        .catch(err => { 
            console.log(`error ${err}`) 
        }); 
}