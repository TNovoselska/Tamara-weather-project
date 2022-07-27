let now = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = date.getMinutes();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }
  return `${currentDay} ${currentHour}:${currentMinute}`;
}
let date = document.querySelector("#current-Date");
console.log(formatDate(now));
date.innerHTML = formatDate(now);

function showWeather(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#now-temp");
  tempElement.innerHTML = `${currentTemp}°`
  document.querySelector("#current-city").innerHTML = response.data.name;
}

function search(city) {
  let apiKey = "bf6135db2ac746321352c2599aa8eaaf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-enter").value;
search(city);
}
let submit = document.querySelector("#submit");
submit.addEventListener("click", handleSubmit);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function showPosition (position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "bf6135db2ac746321352c2599aa8eaaf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function getPosition (event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentBtn = document.querySelector("#current-btn");
currentBtn.addEventListener("click", getPosition);
 


  


