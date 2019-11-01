const appID = '3739f783e04f55a655596109a6463b1d'
const btn = document.querySelector("button")
let input;
let info = document.querySelector('.info')

btn.addEventListener('click', ()=>{
input = document.querySelector("input").value
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=${appID}`)
    .then(res => res.json())
    .then(response => {
      document.querySelector('p').innerHTML = response.main.temp + ' °F'
    })
    .catch(err =>{
      console.log(`error ${err}`)
      alert("sorry, no results for this search")
    });

})
