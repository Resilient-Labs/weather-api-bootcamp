// document.querySelector('button').addEventListener('click', getFetch,)

let apiKey = 'a2f36cf9870463dfcd9f663ab0cb70ab'


function fetchWeather(){
  let pickCity = document.querySelector('input').value
  // let pickCity = 'Trenton' 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${pickCity}&appid=${apiKey}&units=imperial`
  console.log(url)
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.weather[0].description)
    console.log(data.main.temp)
    document.getElementById('temp').innerText = data.weather[0].description
    document.getElementById('description').innerText = data.main.temp
    // document.getElementById('cityName').innerText = data.main[0].name
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
document.querySelector('button').addEventListener('click', fetchWeather)






// function getFetch(){
//     let chooseDate = document.querySelector('input').value
//     console.log(chooseDate)
//     const url =`'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=MBNDwb9ekuoaR4a2rlqnSl2mfdaLt5B9'`


    // document.querySelector('img').src = data.hdurl // Outputs the image URL
    // document.querySelector('h3').innerText = data.explanation // Outputs the explanation for the url img