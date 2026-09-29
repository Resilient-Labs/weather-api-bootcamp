document.querySelector('button').addEventListener('click', getLocation)


function getLocation(){
    const city = document.querySelector('#city').value
    const country = document.querySelector('#country').value
    const geoUrl = `https://geocode.maps.co/search?city=${city}&country=${country}&api_key=6ab29d73a9ce1974663380muje462d6`

    fetch(geoUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const lat = data[0].lat
            const long = data[0].lon

            getTemp(lat, long, city, country)
            console.log(lat, long)
        })

    console.log(city, country)

}


function getTemp(lat, long, city, country){
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=9a29889553bb4602a84174636262209&q=${lat},${long}`

    fetch(weatherUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('h2').innerHTML = `The Current Temperature in ${city}, ${country} is ${data.current.temp_f} degrees Fahrenheit`
        })
}