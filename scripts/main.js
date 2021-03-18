// import { settings } from "./Settings.js"
import {parkList, parkPreviewList} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import {loadWeather, useWeather} from "./weather/WeatherProvider.js"
import {weatherCard} from "./weather/WeatherCard.js"
import {useAttractions, loadAttractions} from "./attractions/AttractionProvider.js"
import {attractionList} from "./attractions/AttractionList.js"
import {useEatery, loadEatery} from "./eateries/EateryProvider.js"
import {eateryCard} from "./eateries/Eatery.js"
import {eateryList} from "./eateries/EateryList.js"
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
//--------------------------- eatery code-------------------- //

const displayEatery = (eateryId) => {
    console.log(eateryId, useEatery() )
    const eatDisplayArray = []
    useEatery().find((singleEatery) => {
        if (singleEatery.id === (eateryId)){
            eatDisplayArray.push(singleEatery);
        }
    })
    return eatDisplayArray;
}



// navElement.addEventListener("change", event => {
//     if (event.target.id === "eatery_options") {
//         const singleEatery = displayEatery(event.target.value)
//         console.log("show me this eatery")
// 		eateryPreviewList(singleEatery)
//     }});
const dropdownElement = document.querySelector("#eateries_preview");

dropdownElement.addEventListener("change", event => {
    if (event.target.id === "eatery_options") {
        const eaterySelector = event.target.value
        console.log(`user wants to pick ${eaterySelector}`)
        eateryCard(eaterySelector)
    }
})
        
       
// ------------------------- end of eatery code---------------//


loadParks().then(() => {
    const foundParks = useParks();
    console.log(foundParks);
    parkList(foundParks);
})

loadAttractions().then(()=>{
    const foundAttractions = useAttractions();
    console.log(foundAttractions);
    attractionList(foundAttractions);
})
loadEatery().then(()=>{
    const foundEateries = useEatery();
    eateryList(foundEateries);
});
 
