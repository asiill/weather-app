import setWeatherDisplay from "./weatherDisplay.js";
import getWeatherData from "./weatherData.js";

setWeatherDisplay(getWeatherData("barcelona"));

const searchForm = document.getElementById("search-form");
const locationInput = document.getElementById("location-input");
const submitBtn = document.getElementById("submit-btn");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

submitBtn.addEventListener("click", () => {
    if (locationInput.value === "") {
        return;
    } else {
        setWeatherDisplay(getWeatherData(locationInput.value));
    }
});