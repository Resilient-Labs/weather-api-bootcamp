
window.addEventListener('click', ()=> {
  var city = document.querySelector('input').value
  var insertTemp = document.querySelector('span')
  var insertSummary = document.querySelector('p')
  var proxy = 'https://cors-anywhere.herokuapp.com/'
  var api = `http://api.weatherbit.io/v1.0/current/geosearch?city=${city}&key=adab97da4bf947fbbdfdfedde044a32a`
  fetch(api)
  .then(res => res.json())
  .then(response => {
    let tempC=response.data[0].temp;
    let tempF=Math.ceil((tempC * 9/5) + 32);
    insertTemp.innerHTML= tempF + "F"
    // var description = document.createTextNode(tempF)
    // insertTemp.appendChild(text)
    // insertSummary.appendChild(description)
})
});

//   var api = `${proxy}https://api.darksky.net/forecast/9673be2d203ffb893fe4d3e11fd6d0b9/42.3601,-71.0589`;
//
//       var text = document.createTextNode(data.currently.temperature)
//       var description = document.createTextNode(data.currently.summary)
//       insertTemp.appendChild(text)
//       insertSummary.appendChild(description)
//   });
// });
