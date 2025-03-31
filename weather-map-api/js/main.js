//Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector('button').addEventListener('click', getTemperature)    


function getTemperature(){

    let location =  document.querySelector('input').value
   
    const url = `http://api.weatherapi.com/v1/current.json?key=a35546c1f38441cda83161859252603&q=${location}`
  
          fetch(url) 
            //or do two separate fetch one for city and another one for country
          .then(res => res.json()) 
          .then(data => { 
              console.log(data)
              document.querySelector('p').innerText = `${data.current.temp_f} degrees fahrenheit`
                 
          })
          .catch(err =>{ 
              console.log(`error ${err}`)
          });  
  }

