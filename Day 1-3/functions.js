// JavaScript by Mikkel Lund Clausen / DAT / cph-mc259@cphbusiness.dk
// Below is the solutions for the studypoint exercises for js functions

// 1
//Function Declaration
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

//Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

// 2
console.log(add(1, 2))     // 3
console.log(add)          // the whole function itself
console.log(add(1, 2, 3)); // 3
console.log(add(1));	  // Not a Number
console.log(cb(3, 3, add)); // Result from the two numbers: 3+3=6
console.log(cb(4, 3, sub)); // Result from the two numbers: 4+3=1
console.log(cb(3, 3, add)); // error, the brackets should be removed
console.log(cb(3, "hh", add));// Result from the two numbers: 3+hh=3hh

// 3
cb = function (n1, n2, callback) {
    try {
        typeof n1 === "number";
        typeof n2 === "number";
        typeof callback === "function";

        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);

    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }

};

console.log(add(1, 2, 3)); // 3
console.log(cb(3, 3, add())); // TypeError: callback is not a function - undefined
console.log(cb(3, "hh", add));// Result from the two numbers: 3+hh=3hh

// 4
function mul(n1, n2) {
    return n1 * n2;
}
console.log(cb(3, 3, mul)); // Result from the two numbers: 3+3=9
console.log(cb(4, 3, mul)); // Result from the two numbers: 4+3=12

// 5
var div = function (n1, n2) {
    return n1 / n2;
}
console.log(cb(3, 3, div)); // Result from the two numbers: 3+3=9
console.log(cb(4, 3, div)); // Result from the two numbers: 4+3=12

// Callbacks

// callback exercise
function myFilter(arr, callback) {
    var resultArray = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (callback(element)) {
            resultArray.push(element);
        }
    }
    return resultArray;
}

// 1
var boyz = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
function sortThree(boy) {
    return boy.length <= 3;
}
var only3 = boyz.filter(sortThree);
console.log(only3);

// 2
function uppers(boy) {
    return boy.toUpperCase();
}
var bigLetters = boyz.map(uppers);
console.log(bigLetters);

// 3
var boyList = boyz.join("</li><li>");
var strStart = "<ul><li>";
var strEnd = "</li></ul>";
console.log(strStart + boyList + strEnd);

// 4
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function filterCars(car) {
    var myNewCarArray = [];
    if (car.year > 1999) {
        myNewCarArray.push(this);

        return myNewCarArray;
    }
    /*
    if (car.price < 5000) {
        myNewCarArray.push(this);

        return myNewCarArray;
    }
    if (car.make === "Volvo") {
        myNewCarArray.push(this);

        return myNewCarArray;
    }
    */
}
var newCarList = cars.filter(filterCars);
console.log(newCarList);

// 4a

// 4b


// Asynchronous Callbacks

// 1
/* order:
console.log("aaaaaaaaaa");
console.log("dddddddddd");
console.log("ffffffffff");
msgPrinter ("eeeeeeeeee",1000);
msgPrinter ("bbbbbbbbbb",2000);
*/

// 2
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");


// this and constructor functions

// 1
function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);  //Explain this: This executes after 2 sec
    }, 2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function and saves the name
console.log("I'm global: " + name);  //Explain this: then the name can be used here

// That was silly. How do we use a function starting with a capitalized letter?, and what do we call such a function?
// = its a constructor, like class. In ecmascript 6 we can use classes like in java and c# 

// 2
var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: " + name);  //What’s different ? new class with same name?

// 3
//Store a reference to the outer this
function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);
    }, 2000);
}

//Using the bind(..) function
function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);
    }.bind(this), 2000);
}

// 4
var greeter = function () {
    console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);


// JS Objects

// 1
var myObj = {
    name: "Mikkel",
    birthday: "05/02/1978",
    hobby: "Programming",
    email: "cph-mc259@cphbusiness.dk"
}
for (prop in myObj) {
    console.log(prop, [prop]);
}

delete myObj.birthday;
delete myObj.email;

for (prop in myObj) {
    console.log(prop, [prop]);
}

// 2
class Persona {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

}

var me = new Persona("Mikkel", "Clausen", "39");
console.log(me._age);

// Reusable Modules with Closures

// 1

// 2




