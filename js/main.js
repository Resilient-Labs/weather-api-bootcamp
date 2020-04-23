// let city = document.getElementById("city").value
// let country = document.getElementById("country").value

document.getElementById("getWeather").addEventListener("click", (e)=>{
let city = document.getElementById("city").value
console.log(city)
let country = document.getElementById("country").value
console.log(country)




fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=c3636afbd6a55832f78537a2c602777d&units=imperial`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector("p").textContent = response.main.temp
      console.log(response.main.temp);
    })
 .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})


 // fetch("https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey", {
 // 	"method": "POST",
 // 	"headers": {
 // 		"x-rapidapi-host": "AccuWeatherstefan-skliarovV1.p.rapidapi.com",
 // 		"x-rapidapi-key": "2dea8cfd8emsh11fbf566be137e9p11725fjsndb764926b92c",
 // 		"content-type": "application/x-www-form-urlencoded"
 // 	},
 // 	"body": {}
 // })
 // .then(response => {
 // 	console.log(response);
 // })
 // .catch(err => {
 // 	console.log(err);
 // });


//open-weather-key=== c3636afbd6a55832f78537a2c602777d
// ${state},
// let state = document.getElementById("country").value
// console.log(country)
