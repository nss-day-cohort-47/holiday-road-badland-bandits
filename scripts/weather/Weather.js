export const Weather = (weatherObj) => {
    return `  
    <div class="weather_card">
    <p class="date">${weatherObj.dt_txt}</p>
    
    <p class="wx">${weatherObj.weather[0].description}</p>
    <p class="temps"><span>High:</span>${weatherObj.main.temp_max}<span>Low:</span>${weatherObj.main.temp_min}</p>
</div>
    `
}
// 
