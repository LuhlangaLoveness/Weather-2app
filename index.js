function search(event) {
  event.preventDefault();
  let searchTextInput = document.querySelector("#search-text-input");
  let city = document.querySelector("#current-city");
  city.innerHTML = searchTextInput.value;
}
function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDayDate = document.querySelector("#current-date");
let currentDate = new Date();

currentDayDate.innerHTML = formatDate(currentDate);
