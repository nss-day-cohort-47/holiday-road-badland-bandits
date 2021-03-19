export const Eatery = (eateryObj) => {
  
    return `<section class = "eateries_preview">
     <h3>${eateryObj.businessName}</h3>
     <button id="container_details--eatery__${eateryObj.id}">Eatery Details:</button>
     </section>
     <section id="eatery_preview--details">
     <div id="eateryPanel"></div>
     <p class="flip" onclick="myFunction()">Details</p>
    <h3>Eatery Name: ${eateryObj.businessName}</h3>
    <div>Description: ${eateryObj.description}</div>
     <div>City: ${eateryObj.city}</div>
    <div>State: ${eateryObj.state}</div>
    <div>Ameneties: ${eateryObj.ameneties}</div>
    </section>` 
}


