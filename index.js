let submitButton = document.getElementById("submit");
let ul = document.getElementById("list");
const api_key = config.SECRET_API_KEY;
let obj = [];

const fetchData = (city_name) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=` +
      api_key
  )
    .then((response) => response.json())
    .then((data) => {
      obj.push(data);
      renderData();
    })
    .catch((err) => {
      console.log(err);
    });
};

const renderData = () => {
  for (let i = 0; i < obj.length; i++) {
    ul.innerHTML = `<br/><li>Temperature: ${obj[i].main.temp} <br> Feels like: ${obj[i].main.feels_like}</li>`;
  }
  //city_name = "";
};

submitButton.addEventListener("click", function () {
  ul.innerHTML = "";
  let city_name = document.getElementById("cityname").value;
  fetchData(city_name);
});
