
document.querySelector('button').addEventListener('click', getWeather)


function getWeather(){
  let selection = document.querySelector('input').value
  let url = `http://api.weatherapi.com/v1/current.json?key=79356b3e7cc44aad865194224230504&q=${selection}`
   
  fetch(url) 
    
  //converting url in a way to read script
    .then(res => res.json())
    .then(data => { 
      console.log(data) 
      document.querySelector('h2').innerText = `Currently in ${data.location.name}, ${data.location.region} it is ${data.current.temp_f} F`
    })
  .catch(err => { 
    console.log(`error ${err}`) 
  }); 

}

