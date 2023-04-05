//BUTTONS
document.querySelector('button').addEventListener('click', weatherTime)

function weatherTime() {
    // VARIABLES
    let userInput = document.querySelector('input').value
    
    // CHECK IF USER INPUT IS A NUMBER
    if (!isNaN(userInput)) {
        document.querySelector('#outputText').innerText = 'I asked for a name, but a number, babes.'
        document.querySelector('h3').innerText = '😐'
        document.querySelector('#temperature').innerText = ':('
        return
    }
    
    // CHECK IF USER INPUT IS A CITY AND COUNTRY
    const inputArray = userInput.split(',')
    if (inputArray.length !== 2) {
        document.querySelector('#outputText').innerText = 'Please enter a city and country separated by a comma.'
        document.querySelector('h3').innerText = '😐'
        document.querySelector('#temperature').innerText = ':('
        return
    }
    
    // COMPUTATIONS
    const city = inputArray[0].trim()
    const country = inputArray[1].trim()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=22c0269bd81a0b37b5be489c5ca6363f`
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)

            // VARIABLES
            let temp = Math.floor((data.main.temp - 273.15) * 1.8 + 32)

            document.querySelector('#temperature').innerText = temp + '°F'

            if (temp >= 86) {
                document.querySelector('h3').innerText = '🥵'
                document.querySelector('#outputText').innerText = 'Whew, chile, it\'s a HAT.  Yes, HAT, not hot.  Now, pass me that ice pack from the fridge.'
            } else if (temp <= 62) {
                document.querySelector('h3').innerText = '🥶'
                document.querySelector('#outputText').innerText = 'You might need a light jacket it\'s a little nippy, don\'t you think?'
            } else {
                document.querySelector('h3').innerText = '😎'
                document.querySelector('#outputText').innerText = 'Oh, wait, this kinda nice, a little bit.  You ate that one, miss Motha Nature, girl.'
            }

        })
        .catch(err => {
            console.log(`error ${err}`)
        })  
}

document.querySelector('input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        weatherTime()
    }
})
