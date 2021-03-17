// import { settings } from "./Settings.js"
import {parkList, parkPreviewList} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import {loadWeather, useWeather} from "./weather/WeatherProvider.js"
import {weatherCard} from "./weather/WeatherCard.js"
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

const navElement = document.querySelector("nav")
navElement.addEventListener("change", event => {
	if (event.target.id === "park_options") {
       const singlePark = displayPark(event.target.value)
        console.log("show me this national park")
		parkPreviewList(singlePark)
 loadWeather(singlePark.map(weatherObj =>{
    return weatherObj.addresses[0].city;
})).then(weather =>{
    weatherCard(weather);
    console.log(weather);

});
	} 
        
})

// value for the targets option value

loadParks().then(() => {
    const foundParks = useParks();
    console.log(foundParks);
    parkList(foundParks);
})

// might be better to set park id instead of name, dropdown value= park id, singlepark.id===whichpark, will handle getting all the park details. then for the load weather part we can take the event tatget value and 