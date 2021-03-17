
import { eateryDropdown } from "./EateryDropdown.js";




export const eateryList = (list) => { 
    let eateryHTML = ""; 
    const eateryDisplay = document.querySelector("#eat_options");
    for (const eateryObj of list) { 
        eateryHTML += eateryDropdown(eateryObj) }
        eateryDisplay.innerHTML = eateryHTML;
         }

