
  function getWeather(){
  let city = document.querySelector('.city').value
  let country = document.querySelector('.country').value 
  let description = document.querySelector('h3') 
  let sunny = document.querySelector('.sunny')
  let cloudy = document.querySelector('.cloudy')
  let rain = document.querySelector('.rain')
  rain.classList.add('hide')
  sunny.classList.add('hide')
  cloudy.classList.add('hide')
  let url = ` https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&units=I&key=e213cb6242684e60b4e0c412d29c533a`
  
  fetch(url) 
    .then(res => res.json()) 
    .then(data => { 
      console.log(data)
      document.querySelector('.temp').innerText = 'Temperature :' + data.data[0].app_temp +
    '°F'
      description.innerText = data.data[0].weather.description
      if(`${data.data[0].weather.description}`.includes('rain','rainy', 'Light rain','Drizzle')){
        rain.classList.remove('hide')
        sunny.classList.add('hide')
        cloudy.classList.add('hide')
      }else if(`${data.data[0].weather.description}`.includes('clouds','cloudy','overcast')){
        rain.classList.add('hide')
        sunny.classList.add('hide')
        cloudy.classList.remove('hide')
      }else if(`${data.data[0].weather.description}`.includes('clouds','cloudy','overcast')){
        rain.classList.add('hide')
        sunny.classList.remove('hide')
        cloudy.classList.add('hide')
      }else{
        rain.classList.remove('hide')
        sunny.classList.add('hide')
        cloudy.classList.add('hide')
      }
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
  
  }
  const button = document.querySelector('button').addEventListener('click',getWeather)