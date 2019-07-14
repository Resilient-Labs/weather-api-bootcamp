document.querySelector("button").addEventListener('click',function(){
  const cityName = document.querySelector("input").value
 //const inputValue = document.querySelector('input[type="date"]')
 console.log(cityName)

  //let nasaDate=response.date
    function temperatureConverter(hello){
   valNum = parseFloat(hello);
   document.getElementById("outputFahrenheit").innerHTML=((valNum-273.15)*1.8)+32;
  }


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f461bb1f67b3c95d2d78b2778279a6f5`)
  .then(res => res.json())
  .then(response => {
   let newTemp = response.main.temp
   newTemp = ((newTemp-273.15)*1.8)+32
   newTemp = Math.ceil(newTemp)
   let minTemp = response.main.temp_min
   minTemp = ((minTemp-273.15)*1.8)+32
   minTemp = Math.ceil(minTemp)
   let maxTemp = response.main.temp_max
   maxTemp = ((maxTemp-273.15)*1.8)+32
   maxTemp = Math.ceil(maxTemp)

   // imageUrl="https://github.com/rajatkantinandi/my-images/raw/master/",imgid=result.weather[0].id;
   //    if(imgid>=200&&imgid<300){
   //      imageUrl+="thunderstorm.jpg";
   //    }
   //    else if(imgid>=300&&imgid<400){
   //      imageUrl+="drizzle.jpg";
   //    }
   //    else if(imgid>=500&&imgid<600){
   //      imageUrl+="rain.jpg";
   //    }
   //    else if(imgid>=600&&imgid<700){
   //      imageUrl+="snow.jpg";
   //    }
   //    else if(imgid>=700&&imgid<800){
   //      imageUrl+="atmosphere.jpg";
   //    }
   //    else if(imgid==800){
   //      imageUrl+="clear.jpg";
   //    }
   //    else if(imgid>800&&imgid<900){
   //      imageUrl+="cloudy.jpg";
   //    }
   //    if(imgid>=900){
   //      imageUrl+="tornado.jpg";

   console.log(response)
   document.getElementById("humidity").innerText = `${response.main.humidity}`
   document.getElementById("temp").innerText = `${newTemp}`
   document.getElementById("sky").innerText = `${response.weather[0].description}`
   document.getElementById("tempMin").innerText = `${minTemp}`
   document.getElementById("tempMax").innerText = `${maxTemp}`
   document.getElementById("wind").innerText = `${response.wind.speed}`


  })


  .catch(err => {
    console.log(`error ${err}`)
    alert("no results")
  });

})
