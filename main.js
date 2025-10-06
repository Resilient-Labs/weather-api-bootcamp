
document.querySelector('button').addEventListener('click', getTempInF);

  function getTempInF(){
    const apiKey = 'a4342a4e03d652a49f6f999e6dd07493'
    const cityName = document.getElementById('city').value;
    const countryCode = document.getElementById('country').value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=imperial&appid=${apiKey}`;
    
    console.log(cityName, countryCode);
    
    fetch(url)
    .then (res => {return res.json();

    })
    
    .then(data => {
    console.log('openweathermap sends info', data);
    
    console.log(data.main.temp);
    document.querySelector('p').innerText=`${Math.round(data.main.temp)}°F`;
    // where can i put in my Math.round()
    // this has to be main bc weather info is IN main...sooo how?? data.main?
  })
  
  .catch(err => {
    console.error('error', err);
  })
}