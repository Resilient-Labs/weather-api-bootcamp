//API Key: 89eb8370cfa2a93799fbb1b063d9ee27
//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=89eb8370cfa2a93799fbb1b063d9ee27

document.getElementById('button').addEventListener("click", function(){
const userinput = document.getElementById('getWeather').value
console.log(userinput);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userinput}&appid=89eb8370cfa2a93799fbb1b063d9ee27`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
document.getElementById('temp').innerHTML= Math.ceil((response.main.temp - 273.15) * 9/5 +32) //convert from K to F
      //the function below was created because my json has 100 img
    })
    .catch(err => {
      alert("sorry, there are no results for your search")
    });
})
