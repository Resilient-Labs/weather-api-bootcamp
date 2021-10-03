//Enable your user to enter a city + country and return the temperature in Fahrenheit. Weather API


//create an event listener
document.querySelector('button').addEventListener('click', getPicture)

//function to run event firing
function getPicture ( ){
    //grabs value of input
    let city = document.querySelector('#inputCity').value
    let country = document.querySelector('#inputCountry').value

    //API KEY
    let api_Key = API_KEY

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&${api_Key}`
    //create Fetch Syntax for weather
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let temperature = data.main.temp
        document.querySelector('#tempResults').innerHTML= temperature
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    });
}



