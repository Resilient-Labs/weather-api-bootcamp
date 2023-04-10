//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/



document.querySelector('button').addEventListener('click', getWeather)


function getWeather(){
    let selection = document.querySelector('input').value
    let url = `http://api.weatherapi.com/v1/current.json?key=0b646e2729b448cfa50174606230404&q=${selection}`
    
    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      let city = data.location.name
      let state = data.location.region
      let country = data.location.country
      let condition = data.current.condition.text
      let degree = data.current.temp_f
      document.querySelector('h2').innerText = `${city}, ${state}, ${country} is currently ${degree} °F and is ${condition}!`
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 


}
