// import { settings } from "./Settings.js"
import {parkList, parkPreviewList, parkPreviewDetails} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import {loadWeather, useWeather} from "./weather/WeatherProvider.js"
import {weatherCard} from "./weather/WeatherCard.js"
import {useAttractions, loadAttractions} from "./attractions/AttractionProvider.js"
import {attractionList} from "./attractions/AttractionList.js"
import {useEatery, loadEatery} from "./eateries/EateryProvider.js"
import {eateryCard} from "./eateries/Eatery.js"
import {eateryList} from "./eateries/EateryList.js"
import {attractionList, attractionName} from "./attractions/AttractionList.js"
// import { park } from "./parks/Park.js"



const displayPark = (parkId) => {
    console.log(parkId, useParks() )
    const selectedPark = useParks().find(singlePark => {
        return singlePark.id === (parkId)
    })
    return selectedPark
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
    console.log("btn clicked ", event)
    if(event.target.id.startsWith("container_details--park")) {
        const parkId = event.target.id.split("__")[1]
        console.log("park id", parkId);
        const singleParkDetails = displayPark(parkId)
        console.log(singleParkDetails)
        parkPreviewDetails(singleParkDetails)
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







//i need to make a function that finds the details of the selected park
// const parkDetails =  (showParkDetails) => {
//     const parkDetailsArray = []
//     useParks().filter(parkPreviewDetails => {
//         if (parkPreviewDetails.data.includes(showParkDetails)){
//             return parkDetails;
//         }
//     })
//     parkList(parkDetailsArray);
// }

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
loadEatery().then(()=>{
    const foundEateries = useEatery();
    eateryList(foundEateries);
});
 
