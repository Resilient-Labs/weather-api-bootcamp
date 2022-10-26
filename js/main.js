//Goal: Enable your user to enter a city + country and return the 
//temperature in Fahrenheit

document.querySelector('button').addEventListener('click', getTemp)

function getTemp(e){
    e.preventDefault()
    let city = document.getElementById('cityInput').value
    let country = document.getElementById('countryInput').value
    let locUrl = `https://nominatim.openstreetmap.org/?q=${city}+${country}&format=json&limit=1`

    fetch(locUrl)
        .then(res => res.json()) // parse response as JSON
        .then(locData => {
        console.log(locData)

        let govUrl = `http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civil&output=json`
        fetch(govUrl)
        .then(res => res.json()) // parse response as JSON
        .then(wData => {
                console.log(wData)
                let tempF = ((wData.dataseries[0].temp2m) * (9/5) + 32)
                document.querySelector('h2').innerText = `The temperature in ${city}, ${country} is ${tempF}\u00B0F`
                // document.querySelector('h3').innerText = `Current temp: ${wData.current.temp_f}\u00B0`
                // document.querySelector('h4').innerText = `Feels like: ${wData.current.feelslike_f}\u00B0`
            })


        })

        
        
        .catch(err => {
            console.log(`error ${err}`)
        });

}


