document.querySelector('.button').addEventListener('click', getData)


async function getData() {
    const country = document.querySelector(".country").value
    const city = document.querySelector(".city").value
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=0e904a2a7aacc8772e00052c29bf80c8`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        document.querySelector('h3').innerText = `${(result.main.temp * 9/5) - 459.67} F`
    } catch (error) {
        console.error(error.message);
    }
}