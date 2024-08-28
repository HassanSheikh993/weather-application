const search = document.querySelector(".search input");
const btn = document.querySelector(".iconBtn");
const temperature = document.querySelector(".temp");
const city = document.querySelector(".city"); 
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherImage = document.querySelector(".weather_icon");

btn.addEventListener('click',()=>{
    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=e6d35c0bab724fac14fe4f5f0e0a3405&units=metric`;
   
    fetch(baseUrl).then((response)=>{
        if (response.status === 404) {
            temperature.innerHTML = "N/A";
            city.innerHTML = "City not found";
            humidity.innerHTML = "N/A";
            wind.innerHTML = "N/A";
            weatherImage.src = "images/clouds.png";
            return;
        }
        return response.json();
    }).then((response)=>{

        let cityTemp = response["main"]["temp"];
        let cityName = response["name"];
        let cityHumidity = response["main"]["humidity"];
        let cityWindSpeed = response["wind"]["speed"];
        let weatherCondition = response["weather"][0]["main"];
        
        temperature.innerHTML = cityTemp + "°c";
        city.innerHTML = cityName;
        humidity.innerHTML = cityHumidity + "%";
        wind.innerHTML = cityWindSpeed + " km/h";

        if(weatherCondition == "Clear"){
            weatherImage.src = "images/clear.png";
        }else if(weatherCondition == "Clouds"){
            weatherImage.src = "images/clouds.png";
        }else if(weatherCondition == "Drizzle"){
            weatherImage.src = "images/drizzle.png";
        }else if(weatherCondition == "Mist"){
            weatherImage.src = "images/mist.png";
        }else if(weatherCondition == "Rain"){
            weatherImage.src = "images/rain.png";
        }else if(weatherCondition == "Snow"){
            weatherImage.src = "images/snow.png";
        }else{
            weatherImage.src = "images/clouds.png";
        }



    })
})
