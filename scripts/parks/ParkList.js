import {park} from "./Park.js";
import { parkDropdown } from "./ParkDropdown.js";

export const parkList= (parkArray) => {
render(parkArray)
};

export const parkPreviewList = (previewArray) => {
    previewRender(previewArray)
};
 
//  dropdown select 
 const render = (parkData) => {
//   debugger 
    const parkDisplay = document.querySelector("#park_options");
    let HTMLArray = parkData.map(parkNames => {
        return parkDropdown(parkNames);

    })
    parkDisplay.innerHTML = HTMLArray.join("");
};

const previewRender = (parkData) => {
    //   debugger 
        const parkDisplay = document.querySelector("#park_preview");
        let HTMLArray = parkData.map(parkNames => {
            return park(parkNames);
    
        })
        parkDisplay.innerHTML = HTMLArray.join("");
    };
    