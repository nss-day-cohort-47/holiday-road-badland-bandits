import {parkList, parkPreviewList, parkPreviewDetails} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import {loadWeather, useWeather} from "./weather/WeatherProvider.js"
import {weatherCard} from "./weather/WeatherCard.js"
import {useAttractions, loadAttractions} from "./attractions/AttractionProvider.js"
import {attractionList, attractionName} from "./attractions/AttractionList.js"
import {useEatery, loadEatery} from "./eateries/EateryProvider.js"
import {eateryList, eateryName} from "./eateries/EateryList.js"






const displayPark = (parkId) => {
    console.log(parkId, useParks() )
    const selectedPark = useParks().find(singlePark => {
        return singlePark.id === (parkId)
    })
    return selectedPark
}

const navElement = document.querySelector("nav")
navElement.addEventListener("change", event => {
    if (event.target.id === "park_options") {
        const singlePark = displayPark(event.target.value)
        parkPreviewList(singlePark)
    } 
    
})

const previewElement = document.querySelector("#park_preview")
previewElement.addEventListener("click", event => {
    // console.log("btn clicked ", event)
    if(event.target.id.startsWith("container_details--park")) {
        const parkId = event.target.id.split("__")[1]
        // console.log("park id", parkId);
        const singleParkDetails = displayPark(parkId)
        // console.log(singleParkDetails)
        parkPreviewDetails(singleParkDetails)
    }
})

// -----------------Start of Attractions code----------------//

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

const attractionElement = document.querySelector("nav")
attractionElement.addEventListener("change", event =>{
    if (event.target.id === "biz_options") {
        const singleAttraction = displayAttraction(event.target.value)
        attractionName(singleAttraction)
        // console.log(singleAttraction)
    }
})

// -------------------End of Attractions code----------------//


//--------------------Start of Eatery code----------------------- //

const displayEatery = (eateryName) => {
    // console.log(eateryName, useEatery() )
    const displayArray = []
    useEatery().find((singleEatery) => {
        if (singleEatery.businessName=== (eateryName)){
            displayArray.push(singleEatery);
        }
    })
    return displayArray;
}

const eatElement= document.querySelector("nav")
eatElement.addEventListener("change", event => {
    if(event.target.id==="eatery_options"){
        const singleEatery = displayEatery(event.target.value)
        eateryName(singleEatery)
    }
})

 
  
       
// ------------------------- End of Eatery code-------------------//




loadParks().then(() => {
    const foundParks = useParks();
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
 
