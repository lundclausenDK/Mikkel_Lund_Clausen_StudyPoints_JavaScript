// JavaScript by Mikkel Lund Clausen / DAT / cph-mc259@cphbusiness.dk
// Ajax tasks

// 1
// ready dom object
var app = document.getElementById("app");
var time = document.getElementById("time");
var people = document.getElementById("persons_container");
var pButton = document.getElementById("persons_button");
var nameField = document.getElementById("newname_field");
var nButton = document.getElementById("newname_button");

// Fetch json data
function updateJoke() {

    var url = "https://jokes-plaul.rhcloud.com/api/joke ";
    var conf = { method: "get" };
    var promise = fetch(url, conf);

    promise.then(function (response) {
        return response.json();
    }).then(function (data) {
        app.innerHTML += data.id + "<br>";
        app.innerHTML += data.joke + "<br>";
        app.innerHTML += data.reference;
    });
}

// run
updateJoke();
setInterval(updateJoke, 3600000);


// 2
// Fetch time json
function showTime() {

    var url = "https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec";
    var conf = { method: "get" };
    var promise = fetch(url, conf);

    promise.then(function (response) {
        return response.json();
    }).then(function (data) {
        time.innerHTML = "<h1>" + data.hours + ":" + data.minutes + ":" + data.seconds + "</h1>";
    });
}

// run
showTime();
setInterval(showTime, 1000);


// 3
function loadPeople() {

    people.innerHTML = "";

    var url = "http://localhost/ajax/data/";
    var conf = { method: "get" };
    var promise = fetch(url, conf);

    promise.then(function (response) {
        return response.json();
    }).then(function (data) {

        for (var i = 0; i < data.length; i++) {
            people.innerHTML += data[i].first_name + "<br>";
        }

    });
}

pButton.addEventListener("click", loadPeople, false);

function addPerson() {

    var newname = nameField.value;
    console.log(newname);

    var url = "http://localhost/ajax/";
    var formData = new FormData();
    formData.append("data", newname);

    fetch(url, { method: "POST", body: formData }).then(function (response) {
        return response.text();
    });

}

nButton.addEventListener("click", addPerson, false);
