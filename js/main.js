document.querySelector('button').addEventListener('click', findout)
const apikey = 'caab8d07c64bfd5f209298466bc24262'
function findout() {
  let city = document.querySelector('.city').value
  let country = document.querySelector('.country').value


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apikey}`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    document.querySelector('h2').innerText = `${data.main.temp} F`
    document.querySelector('img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.querySelector('h3').innerText = data.weather[0].description
    document.querySelector('p').innerText = data.main.feels_like
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`);
  })

}
