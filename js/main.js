//Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API
document.querySelector('.button').addEventListener('click', getData)

  function getData(){
    let location = document.querySelector('.location').value
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8511e5dcf8e8d6a1a604e18d6ec8ec8f`

    fetch(apiLink)
      .then(res => res.json())
      .then(data => {
        document.querySelector('h2').innerText = data.name
        document.querySelector('span').innerText = `${data.weather[0].main}. Temp: ${Math.floor(data.main.temp)} Farenheit`
        document.querySelector('h3').innerText = data.weather[0].description
        document.querySelector('img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        // document.querySelector('h3').innerText = data.explanation
        console.log(data)
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
  }
