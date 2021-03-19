import { eateryDropdown } from "./EateryDropdown.js";
import {Eatery} from "./Eatery.js";

export const eateryList = (list) => {
    let eateryHTML= "";
    const eateryDisplay = document.querySelector("#eatery_options");
    for (const eateryObj of list) {
        eateryHTML += eateryDropdown(eateryObj)  }
        eateryDisplay.innerHTML = eateryHTML;
    }

export const eateryName= (list) => {
    let eateryHTML= "";
    const eateryDisplay = document.querySelector(".eateries_preview");
    for (const eateryObj of list) {
        eateryHTML += Eatery(eateryObj) 
        }
        eateryDisplay.innerHTML = eateryHTML;
    }



    // export const eateryPreviewDetails= (list) => {
    //     let eateryHTML= "";
    //     const eateryDisplay = document.querySelector("#eatery_preview--details");
    //     for (const eateryObj of list) {
    //         eateryHTML += eateryDetailsHTML(eateryObj) 
    //         }
    //         eateryDisplay.innerHTML = eateryHTML;
    //     } 

    // export const eateryPreviewDetails = (eateryDetailsArray) => {
    //     eateryPreviewRender(eateryDetailsArray)
    // };
    
    // const eateryPreviewRender = (eateryData) => {
    //     const eateryDisplay = document.querySelector("#eatery_preview--details");
    //     const singleEateryHTML = eateryDetailsHTML(eateryData);
    //     eateryDisplay.innerHTML = singleEateryHTML;
    
    
    // };