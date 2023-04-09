


document.querySelector("button").addEventListener("click",weatherMan)

// http://api.weatherapi.com/v1/current.json?key=5755fe8944a14ffe96e162119230504&q=${selection}

function weatherMan(){
    let selection = document.querySelector("input").value
    let url = `http://api.weatherapi.com/v1/current.json?key=5755fe8944a14ffe96e162119230504&q=${selection}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        let temp = Math.ceil(data.current.temp_f)
        let city = data.location.name
        let state = data.location.region
        let country = data.location.country

      console.log(data)
      document.querySelector("h2").innerText = `The temperature is ${temp}\u00B0 in ${city}, ${state}, ${country}`
  
    })
    .catch(err => {
        console.log(`error ${err}`)
});
}

weatherMan()

