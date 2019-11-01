
const apiKey = 'b5bc1982d6ef3ad4bac3e38eccbe1733'
const btn = document.querySelector("button")
const result = document.querySelector('#result')

btn.addEventListener('click',() =>{
const city= document.querySelector('#city').value.toLowerCase()
const country = document.querySelector('#country').value.toLowerCase()



fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`)
    .then(res => res.json())

    .then(response => {
      let far = Math.floor(response.main.temp * 9/5-459.67)
      const resultss = document.createTextNode(far);
      result.appendChild(resultss)
    })
    .catch(err => {
        // console.log(this.far)
        return("sorry, there are no results for your search")
    });

  })
