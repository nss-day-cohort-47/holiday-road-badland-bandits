import { settings } from "./Settings.js"
import {parkList, parkPreviewList} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import { park } from "./parks/Park.js"




// rendering one park

// const displayPark = (whichPark) => {
//     const displayArray = useParks().filter(singlePark => {
//         if (singlePark.target.includes(whichPark)){
//             return singlePark;
//         }
//     })
//     parkList(displayArray);
// }

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


// export const searchParkByName = (searchValue) => {
//     const parkArray = []
//      useParks().find((specificPark) => {
//         if (specificPark.fullName === (searchValue)){
//             parkArray.push(specificPark);
//         }
//     })
//     parkList(parkArray);
// }



loadParks().then(() => {
    const foundParks = useParks();
    console.log(foundParks);
    parkList(foundParks);
})

