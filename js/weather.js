const API_KEY = "";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lug = position.coords.longitude;
  const url = `http://${lat}${lug}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoErr() {
  alert("Can't get your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
