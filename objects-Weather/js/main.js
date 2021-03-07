//Goal: Enable your user to enter a city + country
//and return the temperature in Fahrenheit

document.querySelector('button').addEventListener('click', getImages)

function getImages(){
  let cityVal = document.querySelector('.city').value
  let countryVal = document.querySelector('.country').value

  const url = `http://api.weatherstack.com/current?access_key=b20fbfc50b8713560583378771ff7723&query=${cityVal},${countryVal}`

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
  console.log(data)


  let result = 1.8*(data.current.temperature) + 32

  document.querySelector('h2').innerText = result

   })
  .catch(err => { console.log(`error ${err}`)
  });
}
