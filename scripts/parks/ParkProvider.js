let apiParks = [];

export const useParks = () => {
    return [...apiParks]
}

export const loadParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=xoVu5QfvkhgpPOi6aT1z1s1XM94mHxrN9dIpYFYH")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}

