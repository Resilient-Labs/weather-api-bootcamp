//The user will enter a date. Use that date to get the NASA picture of the
// day from that date! https://api.nasa.gov/
// const url = 'https://api.nasa.gov/planetary/apod?api_key=Kf6wOfWmdHfCcAFePPoxVPxTseTmtNKmEfAVflfA&date'

  // every api will give you a different url - you google the documentation
  // fetch makes the request for a url , its a function that returns somerthing

document.querySelector('button').addEventListener('click', getWeather)
function getWeather() {


  let city = encodeURIComponent(document.getElementById('city').value)
  let country = encodeURIComponent(document.getElementById('country').value)
  let url = `http://api.weatherstack.com/current?access_key=7c9873808ea8ffb452d6ec691eef6d03&query=${city},${country}`
  console.log(url)
  console.log(country)
    fetch(url)
      .then(res => res.json())// parse response as JSON
      .then(data => {
        console.log(data.current.temperature)
        document.querySelector('#weather').innerText = data.current.temperature * 9/5 + 32
        document.querySelector('#weather2').innerText = data.current.temperature
      })

      .catch(err => {
        console.log(`error ${err}`)
      });
    console.log(url)
}
