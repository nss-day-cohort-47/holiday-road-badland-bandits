import {settings} from "../Settings.js"

let apiWeather = [];


export const useWeather = () => {
    return [...apiWeather]
}

export const loadWeather = (city) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.addresses[0].postalCode},us&units=imperial&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then((weatherObj) => {
        apiWeather = weatherObj.list
        return weatherObj.list;
    })
   
}
