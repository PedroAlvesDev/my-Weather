const weatherForm = document.getElementById("weatherForm");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const cityElement = document.querySelector("#city");
const iconCode = document.querySelector("#iconCode");
const humidity = document.querySelector("#humidity");
const weatherTemp = document.querySelector("#temp");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = event.target[0].value;
    searchWeather(city);

});

async function searchWeather(city) {
    const appKey = '';
    const lang = 'pt_br';
    const units = 'metric';
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&lang=${lang}&units=${units}`)
    const weatherData = await weatherResponse.json();
    showWeather(weatherData);
};

function showWeather(weatherData) {
    cityElement.innerText = weatherData.name;
    temperature.innerText = `Temperatura ${parseInt(weatherData.main.temp)} °C`;
    description.innerText = weatherData.weather[0].description;
    iconCode.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    humidity.innerText = `${weatherData.main.humidity} %`;
    weatherTemp.classList.remove("hide");
};
