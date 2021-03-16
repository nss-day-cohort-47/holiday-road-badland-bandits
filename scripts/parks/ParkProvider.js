import {settings} from "../Settings.js"

let apiParks = [];

export const useParks = () => {
    return [...apiParks]
}

export const loadParks = () => {
    return fetch(`${settings.npsKey}`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
   
}


