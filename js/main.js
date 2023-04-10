document.querySelector('button').addEventListener('click', getWeather)

function getWeather(e){
    e.preventDefault()
    let city = document.querySelector('#city').value
    let country = document.querySelector('#country').value
    const url = `https://api.weatherapi.com/v1/current.json?key=38f5931344034364a9e173940230404&q=${city},${country}&aqi=no`
    fetch (url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('.degrees').innerText = "It's now " + data.current.temp_f + ' °F and'
        document.querySelector('.text').innerText = data.current.condition.text + " , in "
       
        const iconUrl = `https:${data.current.condition.icon}`;

        const icon = document.createElement('img');
        icon.src = iconUrl;

        const container = document.querySelector('.weather-icon-container');
        const existingIcon = container.querySelector('img');
        if (existingIcon) {
          container.removeChild(existingIcon);
        }
        container.appendChild(icon);
    
        // const container = document.querySelector('.weather-icon-container');
        // if (container) {
        //   container.appendChild(icon);
        // } else {
        //   console.error('Could not find container element');
        // }

        document.querySelector('.city').innerText = data.location.name + ', '
        document.querySelector('.country').innerText = data.location.country
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
