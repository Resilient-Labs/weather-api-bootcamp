
// const button = document.querySelector('button')
// const inputValue = document.querySelector('input').value
// document.querySelector('button').addEventListener('click', spacePhoto)

// function spacePhoto(){
    

//     const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

//     fetch(url + `&date=${inputValue}`)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//             console.log(data)
//             document.querySelector('h2') = data.title
//             document.querySelector('h3') = data.explanation
//             document.querySelector('img').src = data.hdurl
//             document.querySelector('iframe').src = data.url
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
// }

document.getElementById("button").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  const apiKey = "04dda99c7403b0832bda2fdbde144552"; // Replace with API key

  if (!city || !country) {
    document.getElementById("result").innerText = "Please enter both city and country.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`; 
//   http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={apiKey}`;  


 

  fetch(url)
    .then(res => res.json())
    .then((data) => {
      const temp = data.main.temp;
      document.getElementById("result").innerText = `The temperature in ${city}, ${country} is ${temp}°F.`;
    })
    .catch((error) => {
      console.log(`error ${error}`)
    });
}