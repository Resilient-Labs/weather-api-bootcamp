const weatherKey = '8b0b1379efee400446c67483e896a617'
var key_21ws = config.KEY_21ws
// const city = document.querySelector('#userCity').value
// const degrees = document.querySelector('.userUnits').value
const sumbitVals = document.querySelector('#enter')

enter.addEventListener('click', function(){
  const city = document.querySelector('#userCity').value
  const degrees = document.querySelector('#userUnits').value
  fetch(`http://api.weatherstack.com/current?access_key=${key_21ws}&query=${city}&units=${degrees}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)
        console.log(userUnits,userCity)
        let allInfo = response['current']
        weatherinfo.innerHTML = allInfo['temperature']
        console.log(allInfo, weatherinfo)

      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

})
