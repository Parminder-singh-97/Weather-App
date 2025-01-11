const apiKey = "fbce5dfac61b094e76f4c6f6cc6b3a78";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchbtn = document.querySelector(".search button");

let cityName = [];

async function checkWeather(city) {
  await fetch(apiUrl + "&appid=" + apiKey + "&q=" + city)
    .then((response) => {
      let weather = response.json();

      return weather;
    })
    .then((data) => {
      // if (true === data) {

      let weatherData = data;
      let temperature = Math.round(weatherData.main.temp);
      let wind = Math.round(weatherData.wind.speed);
      let city = weatherData.name;
      let nameData = weatherData.weather[0].main;
      let img = document.querySelector(".weather img");
      if (nameData == "Clouds") {
        img.src = "assets/clouds.png";
      } else if (nameData == "Rain") {
        img.src = "assets/rain.png";
      } else if (nameData == "Clear") {
        img.src = "assets/clear.png";
      } else if (nameData == "Drizzle") {
        img.src = "assets/drizzle.png";
      } else if (nameData == "Mist") {
        img.src = "assets/mist.png";
      } else if (nameData == "Snow") {
        img.src = "assets/snow.png";
      }

      document.querySelector(".temp").innerHTML = `${temperature} °c`;
      document.querySelector(".city").innerHTML = city;
      document.querySelector(".humidity").innerHTML = weatherData.main.humidity;
      document.querySelector(".wind").innerHTML = wind + " km/h";
       let searchweather = [
    {
      temperature: temperature,
      city:city,
      weatherData:weatherData.main.humidity,
      wind: wind + " km/h",
      
    }
  ]

   localStorage.setItem('weather',  JSON.stringify(searchweather));
    })
    .catch((err) => {
      console.log(err);
    });
}

searchbtn.addEventListener("click", (event) => {
  let inputValue = document.querySelector(".search input").value;

  checkWeather(inputValue);
});


function onsubmitForm(e){ e.preventDefault()}
