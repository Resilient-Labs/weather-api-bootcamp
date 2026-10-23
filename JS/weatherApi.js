
const cityLocation = document.querySelector('cityLocation');
const temp = document.querySelector('temp');

//find the button in out HTML, and when clicked run the weatherButton function. 
const GetWeather = document.querySelector('#searchBtn').addEventListener('click', weatherButton);

//The function that is being run when clicked. 
function weatherButton() {

    const cityClicked = document.querySelector('input').value;

    let url = `http://api.weatherapi.com/v1/current.json?key=${myKey}&q=${cityClicked}&aqi=no`;

    //(const = userInput: Is us creating a parameter / variable)
    //Search the webpage for the first 'input element', and give me the value(information retrieved)

    //Const URL(the menu were getting the information from)
    //The fetch url is basically sending a request to the URL for information.  (Almost like a digital mail carrier. It's going to the URL, and brings back a package of data. Because it takes time to travel and return that data, it makes us a PROMISE. A gurantee to deliver that information back to us)
    fetch(url)
        //The data that you send back, send it back in the json package/format.
        .then(response => response.json())
        //Then send
        .then(data => {
            console.log(data)

            document.querySelector('h2').innerText = data.location.country;
            document.querySelector('h3').innerText = data.location.name
            document.querySelector('p').innerText = data.current.temp_f;

        })
        .catch(err => {
            console.log(`error & ${err}`)
        })
}




