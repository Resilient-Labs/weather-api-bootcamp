document.querySelector(".submit").addEventListener("click", geocoding);
// let temp = document.querySelector("p").innerText
function geocoding() {
  let city = document.querySelector(".city").value;
  let country = document.querySelector(".country").value;
  const apiKey = "b7c45f0ed5224d868de27edfdca3b58a";
  const url = `https://api.weatherbit.io/v2.0/current?country=${country}&city=${city}&key=${apiKey}&units=i`;
  console.log("hello");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#city").innerText = city;
      document.querySelector(".temp").innerText = data.data[0].app_temp;
    });
}
