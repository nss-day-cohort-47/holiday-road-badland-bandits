export const park = (parkObj) => {
    return `<section class = "park_preview">You Selected This National Park:
    <h3 class="parkName">${parkObj.fullName}</h3>
    <div id="weather"></div>
    <button id="container_details--park__${parkObj.id}">Park Details:</button>
    </section>`
}

export const parkDetailsHTML = (parkDetailsObj) => {
    return `<section id="park_preview--details">
    <h3><b>Park Name:</b> ${parkDetailsObj.fullName}</h3>
    <div><b>Description:</b> ${parkDetailsObj.description}</div>
    <div><b>Url:</b> ${parkDetailsObj.url}</div>
    <div><b>State:</b> ${parkDetailsObj.states}</div>
    <div><b>Weather:</b> ${parkDetailsObj.weatherInfo}</div>
    </section>`
};

export const savedPark = (savedObj) => {//exporting HTML to parkList to call in a for loop
    return `
        <aside id ="saved_itinerary">
        <h3><b> Saved Itinerary: </b> ${savedObj.Park}</h3>
        <div>Attraction:  ${savedObj.Attraction}</div>
        <div>Eatery: ${savedObj.Eatery}</div>
        </section>`
}


//class="isHidden"-css- hide and show elements with css display none using classes
