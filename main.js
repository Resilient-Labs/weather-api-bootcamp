//The user will enter a date and get the forecast for that date from weather API. 

document.querySelector('button').addEventListener('click', weatherForecast)
  
function weatherForecast(){
  // let todaysWeather= document.querySelector('input').value
  let city =document.querySelector('.city').value
  // let span = document.querySelector('span')
  document.querySelector('span').innerText = document.querySelector('.city').value
  //location:
  //http://api.weatherapi.com/v1/forecast.json?key=73ad2a5104a64ba59a6161613220305&q=Boston&days=1&aqi=no&alerts=no
  //date: 
  //http://api.weatherapi.com/v1/history.json?key=73ad2a5104a64ba59a6161613220305&q=Boston&dt=2010-01-01
//forecast & current:
//http://api.weatherapi.com/v1/forecast.json?key=73ad2a5104a64ba59a6161613220305&q=Boston&days=5&aqi=no&alerts=no

  let url = `http://api.weatherapi.com/v1/forecast.json?key=73ad2a5104a64ba59a6161613220305&q=${city}&days=5&aqi=no&alerts=no`
  // console.log(url)
 
  
  fetch(url)
  //'promise'-->will "fire" the .then function, when the request is fulfilled

  //res= result ---> parse it into JSON syntax (parse response as JSON)
  .then(res => res.json())//-->yields workable 'data'  
  // data ---> pass the data retrieved into the function 
  .then(data =>{
    console.log(data)
     let iconCurrent=data.current.condition.icon
     let iconForecastOne= data.forecast.forecastday[1].day.condition.icon
     let iconForecastTwo= data.forecast.forecastday[2].day.condition.icon
     
  console.log(iconForecastOne)
  console.log(iconForecastTwo)

    //  let iconForecastThree= data.forecast.forecastday[3].day.icon
    //  let iconForecastFour= data.forecast.forecastday[4].day.icon
    //  let iconForecastFive= data.forecast.forecastday[5].day.icon


    // console.log(data.current.condition.icon)

    //   for(const value of iconCurrent){
    //     if(iconCurrent.includes('//')){
    //      iconCurrent.replace('//','') 
    //    }
    //  }return
    
    // let urlArr=iconCurrent.split('//')

    // iconCurrent= urlArr.join('')

    //reg expression
//string.split('//')---> [array]-----> .join() 


    // document.querySelector('h2').innerText=
    // document.querySelector('img').src= 
    // document.querySelector('h3').innerText =
  
    //  console.log(data.drinks[0])
      document.querySelector('.todays-date').innerText =data.current.last_updated
      document.querySelector('.chance-rain').innerText =data.current.precip_in
      document.querySelector('.current-temp').innerText=data.current.temp_f
      document.querySelector('.current-text').innerText=data.current.condition.text
      

    //  for(const value of iconCurrent){
    //     if(iconCurrent.includes('//')){
    //       iconCurrent=iconCurrent.replace('//','') 
    //     }
    
  
      document.querySelector('.current-icon').src='https:'+iconCurrent

      // console.log(iconCurrent)

  //    for(const value of iconCurrent){
  //     if(iconCurrent.includes('//'){
  //      replace('//','') 
  //    iconCurrent.split('//')
  //    }
  //    }return iconCurrent
  //   }
   
  //  let urlArr=iconCurrent.split('//')

  //  iconCurrent= urlArr.join('')
      //remove // from .png url  using a loop ?


      // console.log(data)
      // console.log(data.current.condition.icon)
      // document.querySelector('span').innerText=city.value
      document.querySelector('.forecast-date-one').innerText=data.forecast.forecastday[1].date
      // console.log(data.forecast.forecastday[1].date)
      document.querySelector('.forecast-temp-one').innerText=data.forecast.forecastday[1].day.avgtemp_f
      document.querySelector('.forecast-rain-one').innerText=data.forecast.forecastday[1].day.daily_will_it_rain
      document.querySelector('.forecast-text-one').innerText=data.forecast.forecastday[1].day.condition.text
      
      // for(const value of iconForecastOne){
      //   if(iconForecastOne.includes('//')){
      //     iconForecastOne=iconForecastOne.replace('//','') 
      //   }
      // } 
    
      document.querySelector('.forecast-icon-one').src='https:'+iconForecastOne

      console.log(iconForecastOne)
    //  document.querySelector('img').src= data.hdurl
    //  document.querySelector('h3').innerText =data.explanation

      document.querySelector('.forecast-date-two').innerText=data.forecast.forecastday[2].date
      document.querySelector('.forecast-temp-two').innerText=data.forecast.forecastday[2].day.avgtemp_f
      document.querySelector('.forecast-rain-two').innerText=data.forecast.forecastday[2].day.daily_will_it_rain
      document.querySelector('.forecast-text-two').innerText=data.forecast.forecastday[2].day.condition.text

      // for(const value of iconForecastTwo){
      //   if(iconForecastTwo.includes('//')){
      //     iconForecastTwo=iconForecastTwo.replace('//','') 
      //   }
      // } 
    
      document.querySelector('.forecast-icon-two').src='https:'+iconForecastTwo

      console.log(iconForecastTwo)




      // document.querySelector('.forecast-date-three').innerText=data.forecast.forecastday[3].date
      // document.querySelector('.forecast-temp-three').innerText=data.forecast.forecastday[3].day.avgtemp_f
      // document.querySelector('.forecast-rain-three').innerText=data.forecast.forecastday[3].day.daily_will_it_rain
      // document.querySelector('.forecast-text-three').innerText=data.forecast.forecastday[3].day.condition.text
      // document.querySelector('.forecast-icon-three').src=data.forecast.forecastday[3].day.icon


      // document.querySelector('.forecast-date-four').innerText=data.forecast.forecastday[4].date
      // document.querySelector('.forecast-temp-four').innerText=data.forecast.forecastday[4].day.avgtemp_f
      // document.querySelector('.forecast-rain-four').innerText=data.forecast.forecastday[4].day.daily_will_it_rain
      // document.querySelector('.forecast-text-four').innerText=data.forecast.forecastday[4].day.condition.text
      // document.querySelector('.forecast-icon-four').src=data.forecast.forecastday[4].day.icon

      // document.querySelector('.forecast-date-five').innerText=data.forecast.forecastday[5].date
      // document.querySelector('.forecast-temp-five').innerText=data.forecast.forecastday[5].day.avgtemp_f
      // document.querySelector('.forecast-rain-five').innerText=data.forecast.forecastday[5].day.daily_will_it_rain
      // document.querySelector('.forecast-text-five').innerText=data.forecast.forecastday[5].day.condition.text
      // document.querySelector('.forecast-icon-five').src=data.forecast.forecastday[5].day.icon
  })
  
  .catch(err =>{
    console.log(`error ${err}`)
  })
}
  