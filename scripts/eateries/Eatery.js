export const Eatery = (eateryObj) => {
  
    return `<section class = "eateries_preview">
     <h3>${eateryObj.businessName}</h3>
     <button id="container_details--eatery" class="flip" onclick="myFunction(), hideButton() ">Eatery Details:</button>
     </section>
     <section id="eatery_preview--details">
     <h3><b>Eatery Name</b>: ${eateryObj.businessName}</h3>
    <div><b>Description</b>: ${eateryObj.description}</div>
     <div><b>City</b>: ${eateryObj.city}</div>
    <div><b>State</b>: ${eateryObj.state}</div>
    <div><b>Ameneties Wifi</b>: ${eateryObj.ameneties.wifi}</div>
    </section>` 
}


