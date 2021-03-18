import { loadParks } from "./ParkProvider.js"

export const parkDropdown = (parkObj) => {
loadParks
    return ` 
<option value="${parkObj.fullName}">${parkObj.fullName}</option>
`
}


