
    const apikey = "72f0b58eb06d0d19d3dcea57046e6ede"
    const btn = document.querySelector('.button')
    const city= document.querySelector('.city').value
    const country = document.querySelector('.countryCode').value.toLowerCase()
    btn.addEventListener("click", ()=> {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apikey}`)
        .then(res => res.json())
        .then(response => {
        let tempDisplay = Math.floor((response.main.temp * (9/5))-459.67)
        let textContent = document.createTextNode(tempDisplay + "°F")
          // Display the temperature in the DOM
        document.querySelector('.temp').appendChild(textContent)
        console.log(response.main.temp)
        })
        .catch(err => {
          console.log(`error ${err}`);
          alert("Sorry,there are no results for your search.")
        })
    })
