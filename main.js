const WEATHER_API_KEY = ""; // ADD KEY

document.getElementById("submit").onclick = getWeather;

function getWeather() {
  const input = document.getElementById("zip").value;
  console.log("getting", input);
  const url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${input}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // Comment out fetch call and use object below for testing to prevent getting rate limited
      // const data = {
      //   location: {
      //     name: "Beverly Hills",
      //     region: "California",
      //     country: "USA",
      //     lat: 34.0900993347168,
      //     lon: -118.406997680664,
      //     tz_id: "America/Los_Angeles",
      //     localtime_epoch: 1759654497,
      //     localtime: "2025-10-05 01:54",
      //   },
      //   current: {
      //     last_updated_epoch: 1759653900,
      //     last_updated: "2025-10-05 01:45",
      //     temp_c: 16.7,
      //     temp_f: 62.1,
      //     is_day: 0,
      //     condition: {
      //       text: "Mist",
      //       icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
      //       code: 1030,
      //     },
      //     wind_mph: 2.2,
      //     wind_kph: 3.6,
      //     wind_degree: 127,
      //     wind_dir: "SE",
      //     pressure_mb: 1010,
      //     pressure_in: 29.81,
      //     precip_mm: 0,
      //     precip_in: 0,
      //     humidity: 86,
      //     cloud: 0,
      //     feelslike_c: 16.7,
      //     feelslike_f: 62.1,
      //     windchill_c: 15.5,
      //     windchill_f: 59.8,
      //     heatindex_c: 15.5,
      //     heatindex_f: 59.9,
      //     dewpoint_c: 14.6,
      //     dewpoint_f: 58.3,
      //     vis_km: 16,
      //     vis_miles: 9,
      //     uv: 0,
      //     gust_mph: 3.8,
      //     gust_kph: 6.2,
      //     short_rad: 0,
      //     diff_rad: 0,
      //     dni: 0,
      //     gti: 0,
      //   },
      // };

      const { country, name, region } = data.location;
      const { condition, temp_f, temp_c, last_updated } = data.current;
      const shortCountry =
        country === "United States of America" ? "USA" : country;

      document.getElementById("icon").src = condition.icon.replace(
        "//",
        "https://"
      );
      document.getElementById("tempF").innerText = `${temp_f}°F`;
      document.getElementById("tempC").innerText = `(${temp_c}°C)`;
      document.getElementById("city").innerText = `${name},`;
      document.getElementById("state").innerText = region;
      document.getElementById("country").innerText = shortCountry;
      document.getElementById("date").innerText = `Last updated: ${new Date(
        last_updated
      ).toDateString()}`;
      document.getElementById("weather").style.visibility = "visible";
    });
}
