// worked on with Ilyass
let main = document.querySelector('#name')
let temperature = document.querySelector('.weather')
let description = document.querySelector('h3')
let button = document.querySelector('.submit')
let input = document.querySelector('input')

button.addEventListener('click', function (name) {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      input.value +
      '&appid=98e506b01a8b3e4f4d59a0b87727bcec'
  )
    .then(response => response.json())
    .then(data => {
      let temperatureValue = data['main']['temperature']
      let nameValue = data['name']
      let weatherValue = data['weather'][0]['description']

      main.innerHTML = nameValue
      description.innerHTML = 'Weather - ' + weatherValue
    })

    .catch(err => {
      console.log(`error ${err}`)
    })
})
