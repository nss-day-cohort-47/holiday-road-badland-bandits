import {parkList, parkPreviewList, parkPreviewDetails} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import {loadWeather, useWeather} from "./weather/WeatherProvider.js"

import { weatherList } from "./weather/WeatherList.js"
import { Weather } from "./weather/Weather.js"
import { park } from "./parks/Park.js"

import {useAttractions, loadAttractions} from "./attractions/AttractionProvider.js"
import {attractionList, attractionName} from "./attractions/AttractionList.js"
import {useEatery, loadEatery} from "./eateries/EateryProvider.js"
import {eateryList, eateryName} from "./eateries/EateryList.js"

import {createSavedItinerary} from "./parks/Itinerary.js"




const displayPark = (parkId) => {
    const selectedPark = useParks().find(singlePark => {
        return singlePark.id === (parkId)
    })
    return selectedPark
}

const navElement = document.querySelector("nav")
navElement.addEventListener("change", event => {
    if (event.target.id === "park_options") {
        const singlePark = displayPark(event.target.value)
        parkPreviewList(singlePark)
    } 
    
})

const previewElement = document.querySelector("#park_preview")
previewElement.addEventListener("click", event => {
    if(event.target.id.startsWith("container_details--park")) {
        const parkId = event.target.id.split("__")[1]
        const singleParkDetails = displayPark(parkId)
        parkPreviewDetails(singleParkDetails)
    }
})

// -----------------Start of Attractions code----------------//

const displayAttraction = (bizName) => {
    const displayArray = []
    useAttractions().find((singleAttraction) => {
        if (singleAttraction.name === (bizName)){
            displayArray.push(singleAttraction);
        }
    })
    return displayArray;
}



const showWeather = (singlePark) => {
    loadParks().then(() => {
        let parks = useParks()
        let foundPark = parks.find(park => park.id === singlePark.id)
        
        loadWeather(foundPark)
        .then(() => {
            let weather = useWeather()
            weatherList(weather)
        })
    })
}




const parkElement = document.querySelector("nav")
parkElement.addEventListener("change", event => {
    if (event.target.id === "park_options") {
        const singlePark = displayPark(event.target.value)
        parkPreviewList(singlePark)
        showWeather(singlePark);
    }
})

const attractionElement = document.querySelector("nav")
attractionElement.addEventListener("change", event =>{
    if (event.target.id === "biz_options") {
        const singleAttraction = displayAttraction(event.target.value)
        attractionName(singleAttraction)
    }
})


// -------------------End of Attractions code----------------//


//--------------------Start of Eatery code----------------------- //

const displayEatery = (eateryName) => {
    const displayArray = []
    useEatery().find((singleEatery) => {
        if (singleEatery.businessName=== (eateryName)){
            displayArray.push(singleEatery);
        }
    })
    return displayArray;
}

const eatElement= document.querySelector("nav")
eatElement.addEventListener("change", event => {
    if(event.target.id==="eatery_options"){
        const singleEatery = displayEatery(event.target.value)
        eateryName(singleEatery)
    }
})

 
  
       
// ------------------------- End of Eatery code-------------------//

//...........B.J. saved button testing............
import {savedList} from "./parks/ParkList.js"
const showSavedItinerary = () => {
    const savedElement = document.querySelector("#saved_itinerary");
      createSavedItinerary().then((savedItems) => {//when i get savedItems I can create the list
          savedElement.innerHTML = savedList(savedItems); //create html representation and 
      })
  }

  const saveElement = document.querySelector(".save")
  saveElement.addEventListener("click", event => {
      if(event.target.id === "save_button"){
          console.log("save");
          const park = document.querySelector("#park_preview").innerText
          const attraction = document.querySelector(".bizarreries_preview").innerText
          const eatery = document.querySelector(".eateries_preview").innerText
          const savedObject = {
              Park: park,
              Attraction: attraction, 
              Eatery: eatery
          }
          console.log("saved object", savedObject)
          const savedData = createSavedItinerary(savedObject)
          .then(response => {
              console.log("what is the saved item", savedData);
              showSavedItinerary();
          })
      }

  })



//.................end button testing...............

loadParks().then(() => {
    const foundParks = useParks();
    parkList(foundParks);
})

loadAttractions().then(()=>{
    const foundAttractions = useAttractions();
    attractionList(foundAttractions);
})

loadEatery().then(()=>{
    const foundEateries = useEatery();
    eateryList(foundEateries);
});
 
