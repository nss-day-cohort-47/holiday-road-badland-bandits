import { loadEatery } from "./EateryProvider.js"

export const eateryDropdown = (eatObj) => {
    loadEatery()
    return ` <option value="${eatObj.id}">${eatObj.businessName}</option>
`
}

