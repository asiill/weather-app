const getWeatherData = async (location) => {
    const apiKey = "e0eddfccee95b13df61f3efe4d0be7eb";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

    try {
        const response = await fetch(apiURL + `&q=${location}` + `&appid=${apiKey}`);
        const data = await response.json();

        const relevantData = {
            timeZone: data.timezone,
            dt: data.dt,
            city: data.name,
            country: data.sys.country,
            weatherIcon: data.weather[0].icon,
            description: data.weather[0].description,
            temp: Math.round(data.main.temp),
            feelsLike: Math.round(data.main.feels_like),
            humidity: data.main.humidity,
            wind: Math.round(data.wind.speed)
        };

        return relevantData;
    }
    catch (error) {
        alert("Error: city not found", error);
        return null;
    }
};

export default getWeatherData;