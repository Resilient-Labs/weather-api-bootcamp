//create an event that will listen for the click of the button
document.querySelector('button').addEventListener('click', getWeather)
const selection = document.querySelector('#searchBar').value

function getWeather(){
    const selection = document.querySelector('#searchBar').value
    const apiKey = 'faeac638b6e64a598f4150901231710'
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selection}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
       document.querySelector('#results').innerText = `The current temperature in ${data.location.name}, ${data.location.region} (${data.location.country}) is: ${data.current.temp_f}F°`

    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
