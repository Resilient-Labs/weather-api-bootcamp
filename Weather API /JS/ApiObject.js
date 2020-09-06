
let objectApi ={
  city:document.getElementById('city'),
  country:document.getElementById('country'),
  h2:document.querySelector('h2'),
  button:document.querySelector('button'),
  apiProperties:function fetchingApi(){
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${objectApi.city.value},${objectApi.country.value}&appid=36f1baad2895dd4173702c1fac524cd9&units=imperial`)
          .then(response => response.json())
          .then(data => {
            document.querySelector('h2').innerHTML=data.main.temp;

          })
        .catch(err => {
        
            console.log(`error ${err}`)
            alert("error")
        });
  }
}

objectApi.button.addEventListener('click',objectApi.apiProperties)
