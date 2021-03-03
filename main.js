document.querySelector('button').addEventListener('click', getTemp)

function getTemp(){
  let city = encodeURIComponent(document.querySelector('#city').value)
  let country = encodeURIComponent(document.querySelector('#country').value)
  let url = `http://api.weatherstack.com/current?access_key=de8d042cc81500cb92a11b99aaa7926c&query=${city},${country}`
  console.log(url);
  console.log(country)
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.current.temperature);
      document.querySelector('#results').innerText = data.current.temperature * 9/5 + 32

  })
}
