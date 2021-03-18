import { eateryDropdown } from "./EateryDropdown.js";

export const eateryList= (eatArray) => {
    eateryRender(eatArray)
    };
    
    export const eatPreviewList = (eatPreviewArray) => {
        eatPreviewRender(eatPreviewArray)
    };
     

    // const eatPreviewRender = (eateryData) => {
    //     const eateryDisplay = document.querySelector("#eateries_preview");
    //     let HTMLArray = eateryData.map(eateryNames => {
    //         return eatery(eateryNames);
    
    //     })
    //     eateryDisplay.innerHTML = HTMLArray.join("");
    // };


export const eateryRender= (list) => { 
    let eateryHTML = ""; 
    const eateryDisplay = document.querySelector("#eatery_options"); for(const eateryObj of list) { 
        eateryHTML += eateryDropdown(eateryObj) }
        eateryDisplay.innerHTML = eateryHTML;
         }

