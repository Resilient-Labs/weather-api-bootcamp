const apiKey = '886253015f3a5914e02ad47976fa18d1'


document.querySelector('button').addEventListener('click', weatherMap)



function weatherMap() {
  let lat = document.querySelector('#latitudeInput').value
  let lon = document.querySelector('#longitudeInput').value

  
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    .then(res => res.json()) 
    .then(data => {


      console.log(data)
    // document.querySelector('h3').innertext = data.

    })
    .catch(err => {
      console.log(`errors $(err)`)
    })


}