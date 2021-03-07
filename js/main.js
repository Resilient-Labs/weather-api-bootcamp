document.querySelector('button').addEventListener('click', getTemperature)

document.querySelector('input').addEventListener('keypress', runGetTemperature)

function runGetTemperature(e){
    if(e.keyCode === 13){
        e.preventDefault()
        getTemperature()
    }
    
}


function getTemperature() {

    let city = document.querySelector('.inputCity').value

    let country = document.querySelector('.inputCountry').value

   

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&units=imperial&appid=e89c759b0eeedfb883f2c032ba235e16`

    console.log(url);

    fetch(url) 

        .then(result => result.json())

        .then(data => {

            console.log(data);
            let temperature = data.main.temp

            document.querySelector('h2').innerText = `Temperature: ${temperature} °F`

        })

        .catch(err => {
            console.log(`error ${err}`)
        }); 
    }








