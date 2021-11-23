// API INFO
const api = {
  key: "4ede1a53b5e91a609e217cb7b55e6366",
  base: "https://api.openweathermap.org/data/2.5/",
  // Example:
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  searchApi: async function (city) {
    const response = await fetch(
      `${this.base}weather?q=${city}&appid=${this.key}&units=metric&lang=fr`
    );
    return response.json();
  },
};

// DOM ELEMENTS
const inputEl = document.querySelector("#search-city");
const searchBtnEl = document.querySelector("#search-btn");

const locationEL = document.querySelector("#location");
const tempEl = document.querySelector("#temp");
const iconEl = document.querySelector("#icon");
const descriptionEl = document.querySelector("#description");
const humidityEl = document.querySelector("#humidity");
const windEl = document.querySelector("#wind");

// HANDLE EVENTS
inputEl.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    searchBtnEl.click();
  }
});

searchBtnEl.addEventListener("click", () => {
  let city = inputEl.value;

  api.searchApi(city).then((data) => {
    if (data.name == undefined) return;

    locationEL.innerText = data.name;
    tempEl.innerText = `${Math.round(data.main.temp)}°C`;
    descriptionEl.innerText = data.weather[0].description;
    humidityEl.innerText = `Humidité: ${data.main.humidity}%`;
    windEl.innerText = `Vent: ${Math.round(data.wind.speed)}km/h`;
  });
});
