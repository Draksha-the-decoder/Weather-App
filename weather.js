const option = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6c7b16a977msh5467ad4d8ac2e1cp153b18jsn7704e3ea74c5',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    let img = `url("https://source.unsplash.com/random/?monument,${city}")`;
    let promise= fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, option)
        promise.then(response => response.json())
        .then(response => {
            console.log(response);
            place.innerHTML = city;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            temp.innerHTML = response.temp;
            wind_speed.innerHTML = response.wind_speed;  
            body.style.backgroundImage = img;          
        })
        .catch(err => {
            console.error(err);
            alert("API could not fetch weather of " + city);
        });                      
}
submit.addEventListener("click", (e) => {
    e.preventDefault();    
    getWeather(city.value);
})
getWeather("Delhi");