// import { settings } from "./Settings.js"
import {parkList, parkPreviewList} from "./parks/ParkList.js"
import {loadParks, useParks} from "./parks/ParkProvider.js"
import {loadWeather, useWeather} from "./weather/WeatherProvider.js"
// import {weatherCard} from "./weather/WeatherCard.js"
import { weatherList } from "./weather/WeatherList.js"
import { Weather } from "./weather/Weather.js"
// import { park } from "./parks/Park.js"



const displayPark = (parkId) => {
    // console.log(parkId, useParks() )
    const displayArray = []
    useParks().find((singlePark) => {
        if (singlePark.id === (parkId)){
            displayArray.push(singlePark);
        }
    })
    return displayArray;
}

const displayWeather = (cityId) => {
    // console.log(cityId, useWeather())
    const displayArray = []
    parkWeather = useWeather().find((singleCity) => {
        console.log("singleCity", singleCity)
        console.log("cityId", cityId)
        displayArray.push(singleCity);
        // if (singleCity.id === (cityId)){
        // }
    })
    // console.log(displayArray)
    return displayArray;
}

const weatherElement = document.querySelector("nav")
weatherElement.addEventListener("change", event => {
    loadParks().then(() => {
        let parks = useParks()
        let foundPark = parks.find(park => park.fullName === event.target.value)
        console.log(foundPark)
        
        loadWeather(foundPark)
        .then(() => {
            let weather = useWeather()
            console.log(weather)
        })
    })
})

const parkElement = document.querySelector("nav")
parkElement.addEventListener("change", event => {
    console.log(event.target.value)
    if (event.target.id === "park_options") {
        const singlePark = displayPark(event.target.value)
        console.log("hello", singlePark)
        parkPreviewList(singlePark)
    }
})
//         loadWeather(singlePark.map(weatherObj =>{
//             console.log(weatherObj)
//             return weatherObj;
//         })).then(weather =>{
//             // console.log(weather);
//             Weather(weather);
//             loadParks().then(() => {
//                 const singleCity = useParks()
//                 console.log(singleCity)
//             })
            
//             // console.log(displayWeather)
//             console.log("show me the weather for this park", singleCity)
//             weatherList(singleCity)
//         });

// 	} 
        
// })


loadParks().then(() => {
    const foundParks = useParks();
    console.log(foundParks);
    parkList(foundParks);
})

// loadWeather().then(() => {
//     const foundWeather = useWeather();
//     console.log(foundWeather);
//     weatherList(foundWeather);
// 
