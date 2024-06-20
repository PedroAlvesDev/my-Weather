const weatherForm = document.getElementById("weatherForm");

const temperature = document.querySelector("#temperature span");
const description = document.querySelector("#description");
const cityElement = document.querySelector("#city");
const iconCode = document.querySelector("#iconCode");



weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = event.target[0].value;
    searchWeather(city);

});

async function searchWeather(city) {
    const appKey = 'c70c7d03b7c8987f1ff2bc7914984873';
    const lang = 'pt_br';
    const units = 'metric';
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&lang=${lang}&units=${units}`)
    const weatherData = await weatherResponse.json();
    showWeather(weatherData);
};

function showWeather(weatherData) {
    cityElement.innerText = weatherData.name;
    temperature.innerText = parseInt(weatherData.main.temp);
    description.innerText = weatherData.weather[0].description;
    iconCode.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
};
