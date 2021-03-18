// import { settings } from "./Settings.js"
import {parkList, parkPreviewList, parkPreviewDetails} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import {loadWeather, useWeather} from "./weather/WeatherProvider.js"
import {weatherCard} from "./weather/WeatherCard.js"
import {useAttractions, loadAttractions} from "./attractions/AttractionProvider.js"
import {attractionList} from "./attractions/AttractionList.js"
// import { park } from "./parks/Park.js"



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
        console.log("show me this national park")
		parkPreviewList(singlePark)
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
    console.log(foundParks);
    parkList(foundParks);
})

loadAttractions().then(()=>{
    const foundAttractions = useAttractions();
    console.log(foundAttractions);
    attractionList(foundAttractions);
})