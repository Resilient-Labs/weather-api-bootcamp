let weather ={
  button:document.getElementById('search'),
  // userAnswer:document.getElementById('userInput').value,
  getWeather(){
    let userAnswer = document.getElementById('userInput').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userAnswer}&units=imperial&appid=1faef65356594f0917efa657c9cd77f7`)
    .then(response => response.json())
    .then(data =>{
      console.log(data.main.temp)
      document.getElementById("temp").textContent = data.main.temp;
    });


 }

}
weather.button.addEventListener("click",weather.getWeather);
