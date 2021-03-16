import { settings } from "./Settings.js"
import {parkList} from "./parks/ParkList.js"
import {loadParks} from "./parks/ParkProvider.js"



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





parkList();

