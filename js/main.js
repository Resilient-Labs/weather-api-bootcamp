document.querySelector("button").addEventListener("click", weatherLookUp);
/*document.querySelector("span").style.display = "none";*/

 function weatherLookUp(){
    const location =  document.querySelector("input").value;
    const apiKey = "aad22028d257486ebf6212358262209";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
       console.log(data.current.condition);
       document.getElementById("currentCity").innerText = data.location.name ;
       document.querySelector("div").innerText = data.current.temp_f + "°";
       document.querySelector("img").src = "https:" + data.current.condition.icon;
       document.getElementById("weatherCondition").innerText = data.current.condition.text;


       
  
    });
}
    







       