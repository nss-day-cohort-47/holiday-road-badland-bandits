// import { settings } from "./Settings.js"
import {parkList, parkPreviewList} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import {loadWeather, useWeather} from "./weather/WeatherProvider.js"
import {weatherCard} from "./weather/WeatherCard.js"
import {useAttractions, loadAttractions} from "./attractions/AttractionProvider.js"
import {attractionList, attractionName} from "./attractions/AttractionList.js"
// import { park } from "./parks/Park.js"



const displayPark = (parkId) => {
    // console.log(parkId, useParks() )
    const displayArray = []
    useParks().find((singlePark) => {
        if (singlePark.id === (parkId)){
            displayArray.push(singlePark);
        }
    })
    return displayArray;
}

const displayAttraction = (bizName) => {
    // console.log(bizName, useAttractions() )
    const displayArray = []
    useAttractions().find((singleAttraction) => {
        if (singleAttraction.name === (bizName)){
            displayArray.push(singleAttraction);
        }
    })
    return displayArray;
}



const navElement = document.querySelector("nav")
navElement.addEventListener("change", event => {
    if (event.target.id === "park_options") {
        const singlePark = displayPark(event.target.value)
        // console.log("show me this national park")
		parkPreviewList(singlePark)
        loadWeather(singlePark.map(weatherObj =>{
            return weatherObj.addresses[0].city;
        })).then(weather =>{
            weatherCard(weather);
            // console.log(weather);
            
        });
    } 
    
})

const attractionElement = document.querySelector("nav")
attractionElement.addEventListener("change", event =>{
    if (event.target.id === "biz_options") {
        const singleAttraction = displayAttraction(event.target.value)
        attractionName(singleAttraction)
        // console.log(singleAttraction)
    }
})


const previewElement = document.querySelector("#park_preview")
previewElement.addEventListener("click", event => {
    if(event.target.id === "container_details--park"){
        // console.log("park details")
    }
})

loadParks().then(() => {
    const foundParks = useParks();
    // console.log(foundParks);
    parkList(foundParks);
})

loadAttractions().then(()=>{
    const foundAttractions = useAttractions();
    // console.log(foundAttractions);
    attractionList(foundAttractions);
})