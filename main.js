

document.querySelector('.weatherInput').addEventListener('click', getTemp)

function getTemp () {
  let input = document.querySelector('.city').value
  let inputTwo = document.querySelector('.country').value
  fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input},${inputTwo}?unitGroup=us&key=847AYKWBZGLAR5NYT7FZS8PX5&contentType=json`)
  
  .then (res => res.json())
  .then (data => {
    console.log(data)

    let temp = data.days[0].temp
    document.querySelector('h2').innerText = `Todays weather is ${temp}`
  })
}







