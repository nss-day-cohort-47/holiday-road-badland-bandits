import { park, parkDetailsHTML, savedPark } from "./Park.js";
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



//............B.J.-save button test..........

export const savedList = (savedPlacesArray) => {
   savedParkDisplay(savedPlacesArray)
}; 
   
    const savedParkDisplay = (savedData) => {
        const savedDisplay = document.querySelector(".save");
        const savedPlacesHtml = savedPark(savedData);
        savedDisplay.innerHTML = savedPlacesHtml;
    }


//     const savedParkDisplay = (savedData) => {
//         const savedDisplay =  document.querySelector(".save");
//         let HTMLArray = savedData.map(names => {
//             return savedPark(names);
//     })
//     savedDisplay.innerHTML = HTMLArray.join("");
// };
    
    
    
    
//     let savedHTML = "";
// 		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
// 		for (const savedObject of savedPlaces) {
// 			//what is a postObject? postObject is the object of the HTML representation--Post
// 			savedHTML += savedPark(savedObject)
// 		}
// 		return savedHTML;
	
// }

//............end save button test..................