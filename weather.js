document.querySelector('button').addEventListener('click', getForecast)


function getForecast(){

    let cityName = document.getElementById('cityName').value
  

    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=7f4ae86d233472aceaa1080ace956095`

 
    //fetch is a function already defined by js
    //this is a function call


    //fetch gives you promises, the .then is how you tell JS what to do after
    //the promise is done   
     fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data[0].lon)
    console.log(data[0].lat)
    let cityLat = data[0].lat
    let cityLon = data[0].lon
 
 
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=7f4ae86d233472aceaa1080ace956095`)
    .then(res => res.json()) // parse response as JSON
    .then(currentData => {
    console.log(currentData) 
    document.querySelector('h2').innerText = currentData.name
    document.querySelector('h3').innerText = currentData.weather[0].main
    document.getElementById('degrees').innerText = currentData.main.temp
    document.getElementById('feelsLike').innerText = currentData.main.feels_like
    
     
    })
   
    .catch(err => {
        console.log(`error ${err}`)
    });   
       
      
       

    });

  


}
       
  

