import {settings} from "../Settings.js"

let apiWeather = [];


export const useWeather = () => {
    return [...apiWeather]
}

export const loadWeather = (city) => {
    console.log(city)
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.addresses[0].postalCode}&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then((weatherObj) => {
        console.log(weatherObj.list);
        apiWeather = weatherObj.list
        return weatherObj.list;
    })
   
}

