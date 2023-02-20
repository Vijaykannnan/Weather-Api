let cityName = document.querySelector("#city-name");
let cityTemp = document.querySelector("#city-temp");
let cityCloud = document.querySelector("#city-cloud");
let inputBox = document.querySelector("#inputbox");

//   promise methode
function check() {
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputBox.value +
    "&appid=192b1f0f10246a0a1d63eac76e731b35";

  fetch(apiUrl)
    .then((data) => {
      if (data.ok) {
        console.log(data);
        return data.json();
      } else {
        throw new Error("failed to fetch bro");
      }
    })
    .then((obj) => {
      console.log(obj);
      cityName.innerHTML = `Name: ${obj.name}`;
      cityTemp.innerHTML = `⛅Temp: ${obj.main.temp}`;
      cityCloud.innerHTML = `🌦️Clouds: ${obj.clouds.all}`;
    })
    .catch((err) => {
      console.log(err);
    });
}
