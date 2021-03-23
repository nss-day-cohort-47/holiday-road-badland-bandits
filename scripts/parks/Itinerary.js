
export const createSavedItinerary = saveObj => {
    return fetch("http://localhost:8088/itineraries", {//fetch takes two arguments.
        method: "POST",//these are the details we want to return from the fetch. we are posting and not using the default of get.
        headers: {//this is of the type of json, so that when this call comes in from the database it konws what to do with it. 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveObj)// is the object that we are sending to the database. 
                                      //adding "" marks around everything so it can be read by the database
    })
        .then(response => response.json())
  }
  


