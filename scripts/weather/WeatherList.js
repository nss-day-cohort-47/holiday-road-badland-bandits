import { Weather } from "./Weather.js";

export const weatherList = (weatherArray) => {
    renderWeather(weatherArray)
}; 

const renderWeather = (weatherData) => {
    const weatherDisplay = document.querySelector(".weather");
    let HTMLArray = weatherData.map(cityWeather => {
        return Weather(cityWeather);

    })
    console.log(weatherDisplay)
    weatherDisplay.innerHTML = HTMLArray.join("");

}
// window.onload = renderWeather