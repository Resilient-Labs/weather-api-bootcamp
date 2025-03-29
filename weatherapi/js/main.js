//Note to self: change access key before submitting because it will runout-done!
document.querySelector('button').addEventListener('click', getTemp)
function getTemp() {
    const location = document.querySelector('input').value
    const url = `https://api.weatherstack.com/current?access_key=efad0454454762ee90d69c1d2621dc17&query=${location}&units=f`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.current)
            document.querySelector('h2').innerText = data.current.temperature
            


        })
        .catch(error => {
            console.log(`error $ {error}`);

        })

}









































/*
document.querySelector('button').addEventListener('click', getTempInYourCity)
function getTempInYourCity() {
    let tempInCity = document.querySelector('input').value
https://api.weatherstack.com/current?access_key=c127f803341d6feb3f61b2ac15364eeb&query=UnitedStates;Canada;Mexico&units=f 
https://api.weatherstack.com/current?access_key=c127f803341d6feb3f61b2ac15364eeb&query=World&units=f
fetch("https://api.stormglass.io/v2/weather"), {
    headers: {
      'Authorization': cd3c6266-0a54-11f0-a364-0242ac130003-cd3c62fc-0a54-11f0-a364-0242ac130003
    }
    .then (res => res.json ())
.then (data => {
    console.log(data)
    
})
.catch (error => {
    console.log(`error $ {error}`);
    
})
}

//cd3c6266-0a54-11f0-a364-0242ac130003-cd3c62fc-0a54-11f0-a364-0242ac130003*/
/*fetch(url)
      .then(resp => resp.json())
      .then(data.location => {
         document.querySelector('h2').innerText = data.location.temperature
         if (data.media_type === 'image') {
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').src = ''//data.url.classList.add ('hidden')
         }
         else if (data.media_type === 'video')  {
            document.querySelector('iframe').src = data.url
            document.querySelector('img').src = '' //data.hdurl.style.display = 'none'
         }

         document.querySelector('h3').innerText = data.explanation
      })
         
      



document.querySelector('button').addEventListener('click', getTempInYourCity)

function getTempInYourCity() {
    let tempInCity = document.querySelector('input').value
    const url = "http://api.weatherstack.com/current?access_key=c127f803341d6feb3f61b2ac15364eeb&query=Boston"*/