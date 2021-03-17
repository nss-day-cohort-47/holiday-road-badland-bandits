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


const previewElement = document.querySelector("#park_preview")
previewElement.addEventListener("click", event => {
    if(event.target.id === "container_details--park"){
        console.log("park details")
    }
})

loadParks().then(() => {
    const foundParks = useParks();
    console.log(foundParks);
    parkList(foundParks);
})

