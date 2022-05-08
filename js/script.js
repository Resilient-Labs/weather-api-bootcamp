const inputCity = document.querySelector('.locationValue')
const button = document.querySelector('.submitButton')
const weatherdiv = document.querySelector('.weatherInput')
const loc = document.querySelector('.location')
const desc = document.querySelector('.description')
const temp = document.querySelector('.temp')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+ '%20' +inputCity.value+'&appid=65d04f3a4fc69fe75d19cb930e37a85b&units=imperial')
    .then(res => res.json())
    .then(data => {
        let locValue = data['name']
        let descValue = data['weather'][0]['description']
        let tempValue = data['main']['temp']

        loc.innerHTML +=locValue
        desc.innerHTML +=descValue
        temp.innerHTML +=tempValue
        console.log(data)
    })
    
    .catch(err => alert('Please Type the comma between the city and country.'))
})


