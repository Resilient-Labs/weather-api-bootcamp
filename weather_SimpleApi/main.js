// api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}
// c2dd4c00faa746c74724edfe9877d1bc
// api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={c2dd4c00faa746c74724edfe9877d1bc}_

// document.getElementById('weather').addEventListener('click', ()=>{
//   // console.log('cass')
//
//   let country =  document.getElementById('country').value
//   console.log(country);
//   let city =  document.getElementById('city').value
//   console.log(city);
//   // fetch('https://api.openweathermap.org/data/2.5/weather?q=boston,ma,us&appid=c2dd4c00faa746c74724edfe9877d1bc&units=imperial')
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=c2dd4c00faa746c74724edfe9877d1bc&units=imperial`)
//
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(json =>{
//       console.log(json.main.temp);
//       document.getElementById('result').innerHTML = json.main.temp
//
//     })
// })


document.getElementById('weather').addEventListener('click', ()=>{
  // console.log('cass')

  let country =  document.getElementById('country').value
  console.log(country);
  let city =  document.getElementById('city').value
  console.log(city);
  // fetch('https://api.openweathermap.org/data/2.5/weather?q=boston,ma,us&appid=c2dd4c00faa746c74724edfe9877d1bc&units=imperial')
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=c2dd4c00faa746c74724edfe9877d1bc&units=imperial`)

    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(json =>{
      console.log(json.main.temp);






      document.getElementById('result').innerHTML = `The temperature at this location is ${json.main.temp} Degrees Fahrenheit`

    })
})
