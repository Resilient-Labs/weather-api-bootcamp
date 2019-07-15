document.querySelector("button").addEventListener("click",function(){
  const cityName = document.querySelector("input").value
 console.log(cityName)

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

   console.log(response)
   document.getElementById("humidity").innerText = `${response.main.humidity}`
   document.getElementById("temp").innerText = `${newTemp}`
   document.getElementById("sky").innerText = `${response.weather[0].description}`


  })


  .catch(err => {
    console.log(`error ${err}`)
    alert("no results")
  });

})
