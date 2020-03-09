// I worked on this project with my Housemates:
// Zikre H. Kenneth C., Sam D., Shange G., Miggie, G.
//  -- HOUSE CASS, BABY!!!

let cuidad= document.getElementById("city");
let button= document.getElementById("search");

button.addEventListener('click',function(){

  console.log(cuidad.value);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cuidad.value}&appid=ef36e97e996b598e00a44314fe0f09ba`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        let paragraph =document.createElement('p')
        paragraph.innerText = `Right now, in ${cuidad.value} you see ${response.weather[0].description}.`
        document.querySelector('#showWeather').appendChild(paragraph);

        let tempDegrees = document.createElement('p');
        tempDegrees.innerText = `It is (9/5(${response.main.temp} - 273) + 32)°F.`;
        document.querySelector('#showWeather').appendChild(tempDegrees);

        let tempFeelsLike = document.createElement('p');
        tempFeelsLike.innerText = `It feels like (9/5(${response.main.feels_like} - 273) + 32)°F.`;
        document.querySelector('#showWeather').appendChild(tempFeelsLike);

        console.log(response)
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

})
