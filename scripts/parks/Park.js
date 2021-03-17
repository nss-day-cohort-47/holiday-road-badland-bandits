export const park = (parkobj) => {
    return `<section class = "park_preview">
    <h3>${parkobj.fullName}</h3>
    <div id="weather"></div>
    <button id="container_details--park">Park Details:</button>
    </section>`
}