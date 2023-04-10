


// document.getElementById("result").innerText = ` The tempeture is ${fahrenheit}

document.querySelector("button").addEventListener('click', weather);

// get inputs

const output = document.getElementById('result');

// add event listner to inputs
city.addEventListener("#city", itWorks);
country.addEventListener("#country", itWorks);


 function itWorks() {
  const cityFinal = city.value;
  const countryFinal = country.value; 
  const result = cityFinal + ' ' + countryFinal;
}

function weather(){
const city = document.getElementById('city').value;
const country = document.getElementById('country').value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=b0c8db590e3443b4265a5c0a41f24628&units=imperial`

fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector(".tempResult").innerText = data.main.temp
      document.querySelector(".country").innerText = data.sys.country

    }) 
    
    .catch(err => {
        console.log(`error ${err}`)
    });
}
