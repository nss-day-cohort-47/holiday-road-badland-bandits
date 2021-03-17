import {eatery} from "./Eatery.js";
import { EateryDropdown } from "./EateryDropdown.js";

export const eateryList= (eateryArray) => {
render(eateryArray)
};

export const eateryPreviewList = (previewArray) => {
    eatPreviewRender(previewArray)
};
 

 const eatRender = (eateryData) => {
    const eateryDisplay = document.querySelector("#eat_options");
    let HTMLArray = parkData.map(parkNames => {
        return parkDropdown(parkNames);

    })
    parkDisplay.innerHTML = HTMLArray.join("");
};

const eatPreviewRender = (parkData) => {
        const parkDisplay = document.querySelector("#park_preview");
        let HTMLArray = parkData.map(parkNames => {
            return park(parkNames);
    
        })
        parkDisplay.innerHTML = HTMLArray.join("");
    };