var xhr = new XMLHttpRequest(); // inbuilt object from JS to consume API's

// create a new function called xhr.onreadystatechange

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) { //will be explained later
        document.getElementById("data").innerHTML = this.responseText; // if the criteria are met, we change the HTML of the data div with the response text we get
    }
};

xhr.open("GET", "https://swapi.co/api/"); //this will open the connection, use the GET method and parse in the URL

xhr.send(); 

$("div").css("background-color", "blue");