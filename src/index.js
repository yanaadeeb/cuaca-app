// change the current temperature and city name by api call
function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  console.log(response.data.temperature.current);
}

// api call and change interface accordingly
function searchCity(city) {
  let apiKey = "d000cdtfc6273ac30e1a54o0329db047";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

// Changing the H1 according to search input from search bar.
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Kuala Lumpur");
