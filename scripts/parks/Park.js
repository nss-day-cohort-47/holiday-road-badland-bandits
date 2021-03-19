export const park = (parkObj) => {
    console.log("parkObj", parkObj)
    return `<section class = "park_preview">You Selected This National Park:
    <h3>${parkObj.fullName}</h3>
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


//class="isHidden"-css- hide and show elements with css display none using classes
