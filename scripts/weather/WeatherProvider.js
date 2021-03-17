import {settings} from "../Settings.js"

let apiWeather = [];

export const useWeather = () => {
    return [...apiWeather]
}

export const loadWeather = (city) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then((weatherArray) => {
        apiWeather = weatherArray
        return weatherArray;
    });
}
