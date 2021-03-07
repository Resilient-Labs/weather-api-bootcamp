

document.querySelector('button').addEventListener('click',getData)
function getData(){
  let location = document.querySelector('.place').value
  let apiLink =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6ac1cf94d5ba0481ac6b0e83fda14169`
  fetch(apiLink)
    .then(res=>res.json())
    .then(data=> {
      console.log(data)
      let mainkelvin=data.main.temp
      let name=data.name
      let currentTempKelvin=mainkelvin-273
      let currentTemp=Math.round((currentTempKelvin*9/5)+32)
      document.querySelector('.temp').innerText=`It is ${currentTemp}F in ${name} right now`
    })
    .catch(err=>{
      console.log("err")
    })
}
