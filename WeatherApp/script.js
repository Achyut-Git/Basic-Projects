/*const apiKey = "39af330f7f6d14dc5bf06f6a10393078";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
;

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


if(response.status == 404){
document.querySelector(".error").style.display = "block"
document.querySelector(".weather").style.display = "none"
}
else{
	var data = await response.json()
	console.log(data)
	
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
	
	if(data.weather[0].main == "Clouds"){
	weatherIcon.src="images/clouds.png"
	}
	else if(data.weather[0].main == "Clear"){
	weatherIcon.src="images/clear.png"
	}
	else if(data.weather[0].main == "Rain"){
	weatherIcon.src="images/rain.png"
	}
	else if(data.weather[0].main == "Drizzle"){
	weatherIcon.src="images/drizzle.png"
	}
	else if(data.weather[0].main == "Mist"){
	weatherIcon.src="images/mist.png"
	}
	document.querySelector(".weather").style.display = "block";
	document.querySelector(".error").style.display = "none"
}



}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
})
*/

//--------------------------------------------------------AI Optimization---------------------------------------------------------------

const apiKey = "39af330f7f6d14dc5bf06f6a10393078";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`); // Removed space in the query parameter

  if (response.status === 404) { // Use '===' for strict comparison
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    // console.log(data);

    document.querySelector(".city").textContent = data.name; // Use textContent for better security
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";

    // Consider using a switch statement for better readability
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist","Haze":
        weatherIcon.src = "images/mist.png";
        break;
      default:
        weatherIcon.src = "images/default.png"; // Handle unexpected weather conditions
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim()); // Trim whitespace from the input value
});
 