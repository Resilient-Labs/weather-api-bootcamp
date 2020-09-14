document.getElementById("city").onkeyup = function(e){
    if(e.keyCode == 13){
       loca();
    }
}

function loca(){
  let city = document.getElementById("city").value;
  fetch(`https://dev.virtualearth.net/REST/v1/Locations?query=${city}&key=AhJnb5LkdYvfk0orTYXK8zqxQO7dv2lGjwchfZqrPUEdtYN-398MxIndHdeGd6kC`)
    .then (res => res.json())
    .then (data => {
      if (data.resourceSets[0] == undefined){
        alert("City wasn't found, try re-entering the location")
        return
        }
      return new Promise(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data["resourceSets"][0]["resources"][0]["point"]["coordinates"][0]}&lon=${data["resourceSets"][0]["resources"][0]["point"]["coordinates"][1]}&appid=43e89931db46aeed7212f52d54cee99e&units=imperial`)
            .then(res => res.json())
            .then(response => {
              console.log(response)
              let temp = Math.floor(response.main.temp) + "°" + "F"
              let feels_like = Math.floor(response.main.feels_like) + "°" + "F"
              document.getElementById('title').style.paddingTop = "24px";
              document.getElementById('realtime').style.display = "none"
              document.getElementById('name').innerHTML = data["resourceSets"][0]["resources"][0]["name"]
              document.getElementById('weather').innerHTML = response["weather"][0]["description"]
              document.getElementById('icon').innerHTML = (`<img src="svg/${response.weather[0].icon}.svg">`)
              document.getElementById('tempnfeel').innerHTML = (`${temp} ( Feels like ${feels_like} )`)
              document.getElementById('wind').innerHTML = (`Wind : ${response.wind.speed} MPH`)
              document.getElementById('humid').innerHTML = (`Humidity : ${response.main.humidity}%`)
          })
      })
    })
}
