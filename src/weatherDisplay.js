import getLocalTime from "./utils.js";

const setWeatherDisplay = async (promise) => {
    const data = await(promise);

    const time = document.getElementById("time");
    const location = document.getElementById("location");
    const weatherIcon = document.getElementById("weather-icon");
    const description = document.getElementById("description");
    const temp = document.getElementById("actual-temp");
    const feelsLike = document.getElementById("feels-like");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    time.textContent = getLocalTime(data.timeZone);
    location.textContent = `${data.city}, ${data.country}`;
    weatherIcon.src = `../dist/images/${data.weatherIcon}.png`;
    weatherIcon.alt = `${data.description}`;
    description.textContent = `${data.description}`.charAt(0).toUpperCase() + `${data.description}`.slice(1);
    temp.textContent = `${data.temp} °C`;
    feelsLike.textContent = `${data.feelsLike} °C`;
    humidity.textContent = `${data.humidity} %`;
    wind.textContent = `${data.wind} km/h`;
};

export default setWeatherDisplay;