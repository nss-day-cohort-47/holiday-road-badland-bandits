import {park} from "./Park.js";

export const parkList= (parkArray) => {
render(parkArray)
};

const render = (parkData) => {
    const parkDisplay= document.querySelector(".park_preview");
    let HTMLArray = parkData.map(onePark => {
        return park(onePark);

    })
    parkDisplay.innerHTML= HTMLArray.join("");
};

