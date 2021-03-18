export const eateryCard = (eateryId) => {
//     return `<section class = "eateries_preview">
//      <h3>${eatObj.businessName}</h3>
//       </section>`
// 

eateryArray.forEach(item => {
    if (item.id.toString() === eateryId) {
        const eateryHTML = `
        <h4>${item.businessName}</h4>
        <p>${item.description}</p>
        <p>${item.city}, ${item.state}</p>
        `
        document.querySelector("#eateries_preview").innerHTML = eateryHTML
    }
})
}


