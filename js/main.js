

function weatherResult () {// create a funtion that has a fetch inside 

    let getAnswer = document.querySelector("input").value// create a varable with the input so words go throw it
    document.querySelector('input').value = "" // target the input so everytime someone submits something the word goes away
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getAnswer}&APPID=76cdbae952e035864405714b8200419f`)
    .then(res => res.json())// put the input inside the link as a bracket notation so the words you type goes there
    .then(data => {// this is a promise so everytime we request for the data of tempeture is gonna give it to us
      let fahrenheit = Math.floor((data.main.temp - 273.15) * 1.8 + 32) + "F" + "°";//make a variable and convert the information kelvin to f to 
      let cel = Math.floor((data.main.temp - 273.15)) + "C" + "°"; // make another variable and make it kelvin to c and call it as an innertext
      document.getElementById("result").innerText = ` The temperature is ${fahrenheit}/${cel} in ${getAnswer} ` ; // display the variables in the inner text using bracker notation
      
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("Sorry, i think you misspelled something")// just in case they dont find the answer make an alert to tell the user maybe they misspled something
    });
  }

  
  document.querySelector("#nice").addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
      weatherResult()
    }
   
  })
  document.querySelector('button').addEventListener('click', weatherResult)// call the function as an event lisetener when you click the function is gonna run