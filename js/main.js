document.querySelector('button').addEventListener('click', weather)

function weather(){
    const city = document.querySelector('input').value
    const country = document.querySelector('input').value
    const url = `http://api.weatherapi.com/v1/current.json?key=82157bbf84b34b5398e165554221410&q=${city}&${country}
    `

    
    fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      console.log(data.current.feelslike_f)  
      document.querySelector('h3').innerText = `It is currently: ${data.current.feelslike_f}F in ${city}`
        }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}