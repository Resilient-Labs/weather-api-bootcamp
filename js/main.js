const apiKey = "a6f4a4af866600cddf344e0c6d164029";
const searchButton = document.querySelector('#search-btn');
const locationInput = document.querySelector('#location-input');
const forecastUl = document.querySelector('#weather-cards');
const today = document.querySelector('#today-date');

// show the current day's date from Google
today.textContent = new Date().toLocaleDateString(undefined, {
    weekday: "long", month: "long", day: "numeric", year: "numeric"
});

searchButton.addEventListener("click", getCityAndCountry);
locationInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') getCityAndCountry();
});

function getCityAndCountry() {
    forecastUl.innerHTML = "";
    void forecastUl.offsetWidth;  // from ChatGPT to reset animation after each search
    const location = locationInput.value.trim().toUpperCase();
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const byDate = {};

            // group temps by day from Google
            data.list.forEach(e => {
                const date = e.dt_txt.split(' ')[0];
                const temp = e.main.temp;
                if (!byDate[date]) {
                    byDate[date] = {
                        min: temp,
                        max: temp,
                        icon: e.weather[0].icon,
                        desc: e.weather[0].description
                    };
                } else {
                    if (temp < byDate[date].min) byDate[date].min = temp;
                    if (temp > byDate[date].max) byDate[date].max = temp;
                }
            });

            // today + next 4 days
            const days = Object.entries(byDate).slice(0, 5);

            days.forEach(([date, info], idx) => {
                const li = document.createElement('li');
                const dateObj = new Date(date);
                const weekday = dateObj.toLocaleDateString(undefined, { weekday: "long" });
                const dateFull = dateObj.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });

                li.innerHTML = `
                    <p>${idx === 0 ? "Today" : weekday}</p>
                    <p>${dateFull}</p>
                    <p>High: ${Math.round(info.max)}°F</p>
                    <p>Low: ${Math.round(info.min)}°F</p>
                    <img src="https://openweathermap.org/img/wn/${info.icon}@2x.png" alt="${info.desc}">
                    <p>${info.desc}</p>
                `;
                forecastUl.appendChild(li);
            });
        });
}
