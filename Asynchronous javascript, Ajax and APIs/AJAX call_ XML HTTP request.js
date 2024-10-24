const URL = "https://restcountries.com/v3.1/all";

const request = new XMLHttpRequest();
request.open("GET", URL);
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
});
