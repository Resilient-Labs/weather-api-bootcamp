
document.querySelector('button').addEventListener('click', getWeather)



function getWeather(){

   let city = document.querySelector('.city').value
   let country = document.querySelector('.country').value

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&units=imperial&appid=29c28a8cb6184cb23f525aef7d0c2a88`  
  

  //taking the data and plugging into URL to return correlating city, usa

  fetch(url) 
  .then( res => res.json())
  .then(data => {
    console.log(data.main)

  document.querySelector('h2').innerText = `The Temperature Is ${data.main.temp}`

  })
  .catch(err => { 
    console.log(`error ${err}`) 
}); 
}
