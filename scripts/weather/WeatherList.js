import { Weather } from "./Weather.js";

export const weatherList = (weatherArray) => {
    renderWeather(weatherArray)
}; 

const renderWeather = (weatherData) => {
    const weatherDisplay = document.querySelector("#park_preview");
    let HTMLArray = weatherData.map(cityWeather => {
        return Weather(cityWeather);

    })
    weatherDisplay.innerHTML += HTMLArray.join("");

}
// window.onload = renderWeather