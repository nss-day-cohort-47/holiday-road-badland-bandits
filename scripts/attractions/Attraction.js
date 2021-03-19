export const attraction = (attractionobj) => {
    // console.log(attractionobj)
    return `<section class = "bizarreries_preview">
    <h3>${attractionobj.name}</h3>
    <button id= "container_details--bizarre" class="flip" onclick="showDetails(), hideButton()">Attraction Details:</button>
    </section>
    <section id="attraction_preview--details">
    <h3><b>Attraction Name:</b> ${attractionobj.name}</h3>
    <div><b>Description:</b> ${attractionobj.description}</div>
    <div><b>State:</b> ${attractionobj.state}</div>
    <div><b>City:</b> ${attractionobj.city}</div>
    <div><b>Restrooms:</b> ${attractionobj.ameneties.restrooms}</div>
    </section>`
}