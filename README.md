# 🌦 Project: Weather API

### Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit

### weather api 

# weather api https://api.openweathermap.org/data/2.5/weather?q=${selection}&appid=e66af5b64e1a5d368e4bafaea2a9dc05&units=imperial
# convert to metric 
# grab the location q=${selection}
## display 

# show user data such ass temp data.main.feels_like 
 ## document.querySelector('.location').innerText = data.name
  ## document.querySelector('.weather-temp').innerText = `${data.main.temp}F`
   ##  console.log(data)//debug
   ## document.querySelector('.winSpeed').innerText =`${ data.wind.speed}mph`
   ## document.querySelector('.humida').innerText = `${data.main.humidity}%`
   ## document.querySelector('.pressure').innerText = `${data.main.feels_like}F
## html to handle buttons and other elements to target 