
import { attractionDropdown } from "./AttractionDropdown.js";




export const attractionList = (list) => { 
    let attractionHTML = ""; 
    const attractionDisplay = document.querySelector("#biz_options");
    for (const attractionobj of list) { 
        attractionHTML += attractionDropdown(attractionobj) }
        attractionDisplay.innerHTML = attractionHTML;
         }

