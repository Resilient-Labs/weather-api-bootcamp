// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
  let city = document.querySelector('.city').value
  let country = document.querySelector('.country').value
  const url = `https://api.weatherbit.io/v2.0/current?key=1cd1591681cd4257b09baaf119cd8dd9&city=${city}&country=${country}&units=I`
  fetch(url) //api request to server, server sends back json object with 2 properties, message and status
  .then(res => res.json()) // parse response as JSON; once it hears the click, the "then" fires, and so on and so forth (think: you go to Popeyes and they hand you your food in a bag, the bag being the JSON- we gotta parse thru that for our food)
  .then(data => { //data here can be anything - in this case it actually is data, according to the array we see in the console.log 
  console.log(data)
  document.querySelector('h2').innerText = data.data[0].app_temp
  })
  .catch(err => { //if the above doesnt work out, then catch comes into it 
  console.log(`error ${err}`)
  });

}



