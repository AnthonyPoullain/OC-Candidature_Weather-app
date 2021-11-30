// DOM ELEMENTS
const inputEl = document.querySelector("#search-city");
const searchBtnEl = document.querySelector("#search-btn");
const locationEL = document.querySelector("#location");
const tempEl = document.querySelector("#temp");
const iconEl = document.querySelector("#icon");
const descriptionEl = document.querySelector("#description");
const humidityEl = document.querySelector("#humidity");
const windEl = document.querySelector("#wind");
const bgEl = document.querySelector("#app-bg");
const inputErrorEl = document.querySelector("#city-error");

// API
const api = {
  // Example:
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  key: "4ede1a53b5e91a609e217cb7b55e6366",
  base: "https://api.openweathermap.org/data/2.5/",

  searchApi: async function (city) {
    const response = await fetch(
      `${this.base}weather?q=${city}&appid=${this.key}&units=metric&lang=fr`
    );
    return response.json();
  },
};

// FUNCTIONS
function resetAnimation(element) {
  element.style.animation = "none";
  element.offsetHeight; /* trigger reflow */
  element.style.animation = null;
}

function resetSearchBar() {
  inputEl.value = "";
  inputErrorEl.classList.remove("display");
}

function displayWeather(city) {
  api.searchApi(city).then((data) => {
    if (data.name == undefined) {
      inputErrorEl.classList.add("display");
      return;
    }

    resetAnimation(locationEL);
    resetAnimation(bgEl);
    resetSearchBar();

    bgEl.innerHTML = `<img src="https://source.unsplash.com/featured/?${city}" onload="this.style.opacity=.2" alt="background city image"/>`;
    locationEL.innerText = data.name;
    iconEl.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather icon"/>`;
    tempEl.innerHTML = `${Math.round(
      data.main.temp
    )}<span class="app__unit-symbol" id="unit">°C</span>`;
    descriptionEl.innerText = data.weather[0].description;
    humidityEl.innerText = `Humidité: ${data.main.humidity}%`;
    windEl.innerText = `Vent: ${Math.round(data.wind.speed)}km/h`;
  });
}

// HANDLE EVENTS
inputEl.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    searchBtnEl.click();
  }
});

searchBtnEl.addEventListener("click", () => {
  city = inputEl.value;
  displayWeather(city);
});

// DEFAULT
let city = "bangkok";
displayWeather(city);
