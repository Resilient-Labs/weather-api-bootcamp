// let key = "8adfbe69f67a9591d1b17f85c531907b";
let city,countryCode;
document.querySelector("button").onclick= () => {
  city = document.getElementById("city").value;
  countryCode = document.getElementById("country").value.toLowerCase();
  if(city!=""&&countryCode!=""){
    var p;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=imperial&APPID=8adfbe69f67a9591d1b17f85c531907b`)
      .then(response => response.json())
      .then(response => {
        p = String(response.main.temp);
        console.log(typeof p);
        document.querySelector("span").textContent = p;
      })
      .catch(err => {
        console.log(`error ${err}`);
        alert('sorry, there are no results for your search');
      });
  }
};
