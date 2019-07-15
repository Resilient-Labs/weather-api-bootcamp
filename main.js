
let clickCount = 1

document.getElementById('button').addEventListener('click', (clickCount)=> {
    clickCount++
    clickCount = 0 + clickCount
    console.log(clickCount)
    if(clickCount === 2){
      console.log(worked)
      //window.location.reload(true)
    }
  let location = document.getElementById('location').value
  let convertedLocation = location.replace(new RegExp(" ", 'g'), "%2C+")
  let api = `https://api.opencagedata.com/geocode/v1/json?q=${convertedLocation}&key=c39a4f26c229429c9ffcd98b34fc7d14&pretty=1`
   fetch(api)
  .then(response =>{
    return response.json();
  })
  .then(response => {
    getWeather(response)
  });
});


function getWeather (coordinates){
  let lat = coordinates.results[0].geometry.lat
  let long = coordinates.results[0].geometry.lng
  var insertTemp = document.querySelector('span')
  var insertSummary = document.querySelector('p')
  var proxy = 'https://cors-anywhere.herokuapp.com/'
  var api = `${proxy}https://api.darksky.net/forecast/9673be2d203ffb893fe4d3e11fd6d0b9/${lat},${long}`;
   fetch(api)
  .then(response =>{
    return response.json();
  })
  .then(data => {
      var text = document.createTextNode(data.currently.temperature)
      var description = document.createTextNode(data.currently.summary)
      insertTemp.appendChild(text)
      insertSummary.appendChild(description)

  })
};
