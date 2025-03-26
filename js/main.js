//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const city = document.getElementById('city').value.toLowerCase()
  const state = document.getElementById('state').value
  const country = document.getElementById('country').value
  const url = `https://api.weatherbit.io/v2.0/current?key=24dea913fd5046a8a94720d1ed563839&units=I&city=${city}&state=${state}&country=${country}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = `The Current teperature in ${city} is ${data.data[0].temp}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

