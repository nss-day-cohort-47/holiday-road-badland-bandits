import {park} from "./Park.js";
import { parkDropdown } from "./ParkDropdown.js";

export const parkList= (parkArray) => {
render(parkArray)
};

 
//  dropdown select 
 const render = (parkData) => {
//   debugger 
    const parkDisplay = document.querySelector(".park_options");
    let HTMLArray = parkData.map(parkNames => {
        return parkDropdown(parkNames);

    })
    parkDisplay.innerHTML = HTMLArray.join("");
};

