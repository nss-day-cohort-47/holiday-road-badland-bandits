
import { attractionDropdown } from "./AttractionDropdown.js";
import {attraction} from "./Attraction.js"



export const attractionList = (list) => { 
    let attractionHTML = ""; 
    const attractionDisplay = document.querySelector("#biz_options");
    for (const attractionobj of list) { 
        attractionHTML += attractionDropdown(attractionobj) }
        attractionDisplay.innerHTML = attractionHTML;
         }


export const attractionName = (list) => { 
    // console.log(list)
let attractionHTML = ""; 
const attractionDisplay = document.querySelector(".bizarreries_preview");
for (const attractionobj of list) { 
attractionHTML += attraction(attractionobj)
console.log(attractionHTML) }
attractionDisplay.innerHTML = attractionHTML;
}
