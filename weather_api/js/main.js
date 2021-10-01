//Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

let city = document.querySelector('.city').value
let country = document.querySelector('.country').value

// "https://api.openweathermap.org/data/2.5/weather?q=pittsburgh&units=imperial&appid=c4cab5506a3bc2466779e827dc0ccf34"

function findTemperature (){
    let city = document.querySelector('.city').value
    let country = document.querySelector('.country').value
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}
    &units=imperial&appid=c4cab5506a3bc2466779e827dc0ccf34`

    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // let temperature =data.main.temp
            document.querySelector('h3').innerText = `Temperature: ${data.main.temp}°F`
        })

        .catch(err => {
            
            console.log('error ${err}');
        });
}
    //Event Listner
    document.querySelector('button').addEventListener('click', findTemperature)
    document.querySelector('input').addEventListener('keypress', findTemperature)


// "https://api.openweathermap.org/data/2.5/weather?q=${val}&units=imperial&appid=c4cab5506a3bc2466779e827dc0ccf34"

// c4cab5506a3bc2466779e827dc0ccf34