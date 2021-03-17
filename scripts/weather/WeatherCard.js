import { loadWeather } from "./WeatherProvider.js"

export const weatherCard = (weatherObj) => {
    console.log(weatherObj);
    return ` 
<option value="${weatherObj.list[0].main.temp}">${weatherObj.list[0].main.temp}</option>
`
}
