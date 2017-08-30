// JavaScript by Mikkel Lund Clausen / DAT / cph-mc259@cphbusiness.dk
// Dom Manipulation and Events

// 1
var body = document.getElementsByTagName("body");
body[0].insertAdjacentHTML("afterbegin", "<div id='my_red'>Hello</div> <div id='my_blue'>Hello</div> <div id='my_green'>Hello</div>");

// a
var redDiv = document.getElementById("my_red");
var blueDiv = document.getElementById("my_blue");
var greenDiv = document.getElementById("my_green");

redDiv.style.backgroundColor = "red";
blueDiv.style.backgroundColor = "blue";
greenDiv.style.backgroundColor = "green";

// b
body[0].insertAdjacentHTML("afterbegin", "<button id='btn_change_color'>Change colors!</button>");
var btnChangeColor = document.getElementById("btn_change_color");

function changeNow() {
    redDiv.style.backgroundColor = "purple";
    blueDiv.style.backgroundColor = "yellow";
    greenDiv.style.backgroundColor = "pink";
    console.log(redDiv);
}

btnChangeColor.addEventListener("click", changeNow, false);

// 2
body[0].insertAdjacentHTML("afterbegin", "<div id='magicA' class='mydiv'></div>");
body[0].insertAdjacentHTML("afterbegin", "<div id='magicB' class='mydiv'></div>");

body[0].insertAdjacentHTML("afterbegin", "<div id='magicC' class='mydiv'></div>");
body[0].insertAdjacentHTML("afterbegin", "<div id='magicD' class='mydiv'></div>");
body[0].insertAdjacentHTML("afterbegin", "<div id='magicE' class='mydiv'></div>");
body[0].insertAdjacentHTML("afterbegin", "<div id='magicF' class='mydiv'></div>");
body[0].insertAdjacentHTML("afterbegin", "<div id='magicG' class='mydiv'></div>");
body[0].insertAdjacentHTML("afterbegin", "<div id='magicH' class='mydiv'></div>");
body[0].insertAdjacentHTML("afterbegin", "<div id='magicI' class='mydiv'></div>");
body[0].insertAdjacentHTML("afterbegin", "<div id='magicJ' class='mydiv'></div>");



var magicA = document.getElementById("magicA");
var magicB = document.getElementById("magicB");

var mydiv = document.getElementsByClassName("mydiv");

// a
function callConsole() {
    //console.log("Hi from " + this.id);
    myP.innerText = "Hi from " + this.id;
}

for (var i = 0; i < mydiv.length; i++) {
    mydiv[i].addEventListener("click", callConsole);
}


// 3
body[0].insertAdjacentHTML("afterbegin", "<p id='myP'></p>");
var myP = document.getElementById("myP");

// 4

// a
body[0].insertAdjacentHTML("afterbegin", "<div id='magicList'></div>");
var magicList = document.getElementById("magicList");

var names = ["Joe", "Susan", "Peter", "Jack"];

function listItems(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        result += "<li>" + array[i] + "</li>";
    }
    return result;
}

magicList.innerHTML += "<ul>" + listItems(names) + "</ul>";

// b
magicList.insertAdjacentHTML("afterend", "<form><input id='nameTextField' value=''><button id='nameTextButton'>Add name</button><button id='removeFirstButton'>Remove first</button><button id='removeLastButton'>Remove last</button></form>");
var nameTextField = document.getElementById("nameTextField");
var nameTextButton = document.getElementById("nameTextButton");

function addNameToList(e) {
    names.push(nameTextField.value);
    magicList.innerHTML = "";
    magicList.innerHTML += "<ul>" + listItems(names) + "</ul>";
    e.preventDefault();
}

nameTextButton.addEventListener("click", addNameToList);

// c
function removeFirst(e) {
    names.shift();
    magicList.innerHTML = "";
    magicList.innerHTML += "<ul>" + listItems(names) + "</ul>";
    e.preventDefault();
}

function removeLast(e) {
    names.pop();
    magicList.innerHTML = "";
    magicList.innerHTML += "<ul>" + listItems(names) + "</ul>";
    e.preventDefault();
}

var removeFirstButton = document.getElementById("removeFirstButton");
var removeLastButton = document.getElementById("removeLastButton");

removeFirstButton.addEventListener("click", removeFirst);
removeLastButton.addEventListener("click", removeLast);

// 5
body[0].insertAdjacentHTML("afterbegin", "<div id='carListContainer'></div>");
var carListContainer = document.getElementById("carListContainer");

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  
// a
function printCarTable(array) {
    carListContainer.innerHTML += "<div class='table' id='t_container'></div";
    var tableContainer = document.getElementById("t_container");

    for (var i = 0; i < array.length; i++) {
        tableContainer.innerHTML += 
        "<div class='table-row'><div class='table-cell'>" + array[i].id + "</div>" +
        "<div class='table-cell'>" + array[i].year + "</div>" +
        "<div class='table-cell'>" + array[i].make + "</div>" +
        "<div class='table-cell'>" + array[i].model + "</div>" +
        "<div class='table-cell'>" + array[i].price + "</div></div>";
    }
}

printCarTable(cars);

// b
carListContainer.insertAdjacentHTML("afterend", "<form><input id='carTextField' value=''><button id='carTextButton'>Price less than</button></form>");
var carTextField = document.getElementById("carTextField");
var carTextButton = document.getElementById("carTextButton");

function filterCars(car) {
    var myNewCarArray = [];
    if (car.year < 1999) {
        myNewCarArray.push(this);

        return myNewCarArray;
    }
}

function sortCars(e) {
    var newCarList = cars.filter(filterCars);
    carListContainer.innerHTML = "";
    printCarTable(newCarList);
    e.preventDefault();
}

carTextButton.addEventListener("click", sortCars);

// 6


