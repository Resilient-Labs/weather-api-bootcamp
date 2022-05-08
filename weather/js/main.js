//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getInfo)

const apiKey = '1ec409d9f27eff503785651ea68071b1'

function getInfo(){
    let lat = document.getElementById('latitude').value
    let lon = document.getElementById('longitude').value
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    // after + including the question mark are query parameters (not part of the api, inputs into the api) making the api call (url up to weather) more specific 
    // interpolated string templates
    // variable name + value of the variable 

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        let tempFaren = ((data.main.temp - 273.15) * 9/5) + 32 
            document.querySelector('h2').innerText = data.name
            document.querySelector('h3').innerText = data.weather[0].main
            document.querySelector('h4').innerText = tempFaren+'°F'
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}

// (286.29K − 273.15) × 9/5 + 32 = 55.652°F
// kelvin to farenheight