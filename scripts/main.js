import { settings } from "./Settings.js"
import {parkList, parkPreviewList} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import { park } from "./parks/Park.js"


const displayPark = (whichPark) => {
    console.log(whichPark, useParks() )
    const displayArray = []
    useParks().find((singlePark) => {
        if (singlePark.fullName === (whichPark)){
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
	} 
        
})

loadParks().then(() => {
    const foundParks = useParks();
    console.log(foundParks);
    parkList(foundParks);
})

