

document.querySelector('button').addEventListener('click', getTemp)

function getTemp(){
  
  let getWeather = document.querySelector('input').value
  let url = `https://api.weatherapi.com/v1/current.json?key=b2d86b8868b944a59fd145638220405&q=${getWeather}`
  console.log(getWeather)

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('h1').innerText = data.current.temp_f
    document.querySelector('h2').innerText = data.location.name + " " + data.location.region
                                              
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}