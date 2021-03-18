export const park = (parkObj) => {
    return `<section class = "park_preview">You Selected This National Park:
    <h3>${parkObj.fullName}</h3>
    <div id="weather"></div>
    <button id="container_details--park__${parkObj.id}">Park Details:</button>
    </section>`
}

export const parkDetailsHTML = (parkDetailsObj) => {
    return `<section id="park_preview--details">
    <h3>Park Name: ${parkDetailsObj.fullName}</h3>
    <div>Description: ${parkDetailsObj.description}</div>
    <div>Url: ${parkDetailsObj.url}</div>
    <div>Address: ${parkDetailsObj.addresses}</div>
    <div>Weather: ${parkDetailsObj.weatherInfo}</div>
    </section>`
};


//class="isHidden"-css- hide and show elements with css display none using classes