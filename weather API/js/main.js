// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit


document.querySelector('button').addEventListener('click', getTemp)

function getTemp() {
    const city = document.querySelector('input').value
    // gets celsius temperature in chosen city
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(res => res.json())
    .then(data => {
        //  converts string to integer
        let celsius = parseInt(data.temperature)
        // celsius to fahrenheit conversion
        let fahrenheit = (9/5) * celsius + 32
        console.log(fahrenheit)
        document.querySelector('h2').innerText = `${fahrenheit}° F`

        
    }) 
    .catch(err => {
        console.log(`error ${err}`)
    })
}
