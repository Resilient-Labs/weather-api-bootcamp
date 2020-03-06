document.querySelector('#btn').addEventListener('click', function() {
  let city = document.querySelector('#search').value
  if (!city) {
    alert("Please Enter Location")
  } else {
    fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?q=${city}&key=b9c9938d08634536b34210539200303&format=json&num_of_days=1&date=today`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(weatherApi => {
        console.log(weatherApi);
        document.querySelector('#info').innerHTML = `High Temperature : ${weatherApi.data.weather[0].maxtempF}`
        document.querySelector('#infoOne').innerHTML = `Low Temperature : ${weatherApi.data.weather[0].mintempF}`
      })
  }
})
