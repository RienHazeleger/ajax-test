var xhr = new XMLHttpRequest(); // inbuilt object from JS to consume API's
var data;
// create a new function called xhr.onreadystatechange

xhr.open("GET", "https://swapi.co/api/"); //this will open the connection, use the GET method and parse in the URL

xhr.send();

function setData(jsonData) {
    data = jsonData;
};

console.log(data);

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        setData(JSON.parse(this.responseText));
    }
};