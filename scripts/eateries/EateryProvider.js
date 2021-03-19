let apiEatery = [];

export const useEatery = () => {
    return [...apiEatery]
}

export const loadEatery = () => {
    return fetch(`http://holidayroad.nss.team/eateries`)
    .then(response => response.json())
    .then((eateryArray) => {
        apiEatery = eateryArray
        return eateryArray;
    })
}