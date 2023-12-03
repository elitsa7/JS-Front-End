const domElements = {
  inputLocation: document.getElementById("location"),
  getWeatherButton: document.getElementById("submit"),
  forecast: document.getElementById("forecast"),
  currentWeather: document.getElementById("current"),
  upcomingWeather: document.getElementById("upcoming"),
};
const conditions = {
  Sunny: "&#x2600", // ☀
  "Partly sunny": "&#x26C5", // ⛅
  Overcast: "&#x2601", // ☁
  Rain: "&#x2614", // ☂
  Degrees: "&#176", // °
};
const baseUrl = "http://localhost:3030/jsonstore/forecaster/locations";
function attachEvents() {
  domElements.getWeatherButton.addEventListener("click", getWeather);
}
function getWeather() {
  fetch("http://localhost:3030/jsonstore/forecaster/locations")
    .then((res) => res.json())
    .then((data) => {
      const cityIndex = data.findIndex(
        (el) => el.name === domElements.inputLocation.value
      );
      domElements.forecast.style.display = "block";
      if (cityIndex === -1) {
        throw new Error();
      }

      let cityCode = data[cityIndex].code;

      //Current Weather

      fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`)
        .then((res) => res.json())
        .then((data) => {
          const forecasts = document.createElement("div");
          forecasts.className = "forecasts";
          // Condition symbol span
          const symbolSpan = document.createElement("span");
          symbolSpan.className = "condition symbol";
          symbolSpan.innerHTML = conditions[data.forecast.condition];
          forecasts.appendChild(symbolSpan);
          // Condition info span
          let condition = document.createElement("span");
          condition.className = "condition";

          //span 1
          const span1 = document.createElement("span");
          span1.className = "forecast-data";
          span1.textContent = data.name;
          condition.appendChild(span1);
          //span 2
          const span2 = document.createElement("span");
          span2.className = "forecast-data";
          span2.innerHTML = `${data.forecast.low}&#176;/${data.forecast.high}&#176;`;
          condition.appendChild(span2);
          //span 3
          const span3 = document.createElement("span");
          span3.className = "forecast-data";
          span3.textContent = data.forecast.condition;
          condition.appendChild(span3);

          forecasts.appendChild(condition);
          domElements.currentWeather.appendChild(forecasts);
        });

      //Upcoming Weather

      fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityCode}`)
        .then((res) => res.json())
        .then((data) => {
          const forecastInfo = document.createElement("div");
          forecastInfo.className = "forecast-info";

          data.forecast.forEach((el) => {
            const upcoming = document.createElement("span");
            upcoming.className = "upcoming";
            forecastInfo.appendChild(upcoming);
            // span symbol
            const spanSymbol = document.createElement("span");
            spanSymbol.className = "symbol";
            spanSymbol.innerHTML = conditions[el.condition];
            upcoming.appendChild(spanSymbol);

            //span 2
            const forecastData = document.createElement("span");
            forecastData.className = "forecast-data";
            forecastData.innerHTML = `${el.low}&#176;/${el.high}&#176;`;
            upcoming.appendChild(forecastData);

            //span 3
            const forecastData2 = document.createElement("span");
            forecastData2.className = "forecast-data";
            forecastData2.textContent = el.condition;
            upcoming.appendChild(forecastData2);
          });
          domElements.upcomingWeather.appendChild(forecastInfo);
        })
        .catch(() => (forecast.textContent = "Error"));
    })
    .catch(() => (forecast.textContent = "Error"));
}
attachEvents();
