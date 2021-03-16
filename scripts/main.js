import { settings } from "./Settings.js"
import {parkList} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"




// rendering one park
export const searchParkByName = (searchValue) => {
    const parkArray = []
     useParks().find((specificPark) => {
        if (specificPark.fullName === (searchValue)){
            parkArray.push(specificPark);
        }
    })
    parkList(parkArray);
}




loadParks().then(() => {
    const foundParks = useParks();
    console.log(foundParks);
    parkList(foundParks);
})

