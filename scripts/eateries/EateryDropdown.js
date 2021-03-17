import { loadEatery } from "./EateryProvider.js"

export const eateryDropdown = (eatObj) => {
    return ` 
<option value="${eatObj.id}">${eatObj.fullName}</option>
`
}

