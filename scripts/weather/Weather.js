export const Weather = (weatherObj) => {
   console.log(weatherObj)
    return `  
    <div class="weather_card">
    <p class="date">${weatherObj.dt_txt}</p>
    
    <p class="wx">${weatherObj.weather.description}</p>
    <p class="temps"><span>High:</span>${weatherObj[0].main.temp_max}<span>Low:</span>${weatherObj[0].main.temp_min}</p>
</div>
    `
}
// 
