import { park, parkDetailsHTML } from "./Park.js";
import { parkDropdown } from "./ParkDropdown.js";


export const parkList= (parkArray) => {
render(parkArray)
};

export const parkPreviewList = (previewArray) => {
    previewRender(previewArray)
};
 
export const parkPreviewDetails = (parkDetailsArray) => {
    parkPreviewRender(parkDetailsArray)
};

 const render = (parkData) => {
    const parkDisplay = document.querySelector("#park_options");
    let HTMLArray = parkData.map(parkNames => {
        return parkDropdown(parkNames);

    })
    parkDisplay.innerHTML = HTMLArray.join("");
};

const previewRender = (parkData) => {
        const parkDisplay = document.querySelector("#park_preview");
        
        const singleParkHTML = park(parkData);
        parkDisplay.innerHTML = singleParkHTML;
    };
    
    
const parkPreviewRender = (parkData) => {
    const parkDisplay = document.querySelector("#park_preview");
    const singleParkHTML = parkDetailsHTML(parkData);
    parkDisplay.innerHTML = singleParkHTML;


};