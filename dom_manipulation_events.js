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
body[0].insertAdjacentHTML("afterbegin", "<div id='magicList'></div>");
var magicList = document.getElementById("magicList");

var names = ["Joe", "Susan", "Peter", "Jack"];

magicList.innerHTML += "<ul>" + listItems(names) + "</ul>";

function listItems(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        result += "<li>" + array[i] + "</li>";
    }
    return result;
}

// 