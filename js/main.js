document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
  let inputVal = document.querySelector('#city').value
  let inputValTwo = document.querySelector('#country').value
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal},${inputValTwo}&appid=00636f53c18cf5f9dfedb8056b4dc974`
  console.log(url)
  fetch(url)

  .then(res => res.json())
  .then(data =>{
    console.log(data)
      document.querySelector('h2').innerText = data.name
      document.querySelector('h3').innerText = data.main.temp
      // document.querySelector('h3').innerText = data.
  })
  .catch(err =>{
    console.log(`error${err}`)
  })


}
