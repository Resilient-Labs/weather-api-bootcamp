
document.querySelector('#tempBtn').addEventListener('click', getWeather);


function getWeather() {

    const inputVal = document.querySelector('#location').value;

    const apiKey = '0a4f654d639b4a0daba24917262309';


fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputVal}&aqi=no`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        const [year, month, day, hours, minutes] = data.location.localtime.split(/[-  :]/);
        const amOrPm = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
        const timeOfDay = hours >= 12 ? 'PM' : 'AM';
        const tempC = Math.ceil(data.current.temp_c);
        const tempF = Math.ceil(data.current.temp_f);
    
        const icon = data.current.condition.icon.slice(2);
        console.log(icon)

        document.querySelector('.timeDate').innerHTML = `It's ${amOrPm}:${minutes}${timeOfDay}, and today's date is ${month} ${day}, ${year}`;
        document.querySelector('#currentLoc').innerHTML = `${data.current.condition.text} with a temp of ${tempF}°F/${tempC}°C, In ${data.location.name}, ${data.location.region}, ${data.location.country}.`;
        document.querySelector('img').src = `https://${icon}`;

    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}