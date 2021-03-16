import { loadParks } from "./ParkProvider.js"

export const parkDropdown = (parkObj) => {
loadParks
    return ` 
<option> ${parkObj.fullName} </option>
`
}
