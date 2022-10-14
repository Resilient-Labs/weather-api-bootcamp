document.querySelector('.button').addEventListener('click', getTemp)

function getTemp(){
    const location = document.querySelector('input').value
    console.log(location)
    const url = `https://weatherdbi.herokuapp.com/data/weather/${location}`
   
    fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(response.currentConditions.temp)
            document.querySelector('p').innerText = response.currentConditions.temp.f +' \xB0F.'
        })
        .catch(err => console.error(err))
    };
