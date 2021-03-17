// import { settings } from "./Settings.js"
import {parkList, parkPreviewList} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import {loadWeather, useWeather} from "./weather/WeatherProvider.js"
import {weatherCard} from "./weather/WeatherCard.js"
import { weatherList } from "./weather/WeatherList.js"
import { Weather } from "./weather/Weather.js"
// import { park } from "./parks/Park.js"



const displayPark = (parkId) => {
    console.log(parkId, useParks() )
    const displayArray = []
    useParks().find((singlePark) => {
        if (singlePark.id === (parkId)){
            displayArray.push(singlePark);
        }
    })
    return displayArray;
}

const displayWeather = (cityId) => {
    console.log(cityId, useWeather())
    const displayArray = []
    useWeather().find((singleCity) => {
        if (singleCity.id === (cityId)){
            displayArray.push(singleCity);
        }
    })
    return displayArray;
}

const navElement = document.querySelector("nav")
navElement.addEventListener("change", event => {
	if (event.target.id === "park_options") {
       const singlePark = displayPark(event.target.value)
        console.log("show me this national park")
		parkPreviewList(singlePark)
        loadWeather(singlePark.map(weatherObj =>{
            return weatherObj.addresses[0].city;
        })).then(weather =>{
            console.log(weather);
            Weather(weather);
            const singleCity = displayWeather(event.target.value)
            console.log("show me the weather for this park", singleCity)
            weatherList(singleCity)
        });

	} 
        
})


loadParks().then(() => {
    const foundParks = useParks();
    console.log(foundParks);
    parkList(foundParks);
})

// loadWeather().then(() => {
//     const foundWeather = useWeather();
//     console.log(foundWeather);
//     weatherList(foundWeather);
// })
