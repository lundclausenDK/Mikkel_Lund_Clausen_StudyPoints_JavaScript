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
console.log( add(1,2) )     // 3
console.log( add )          // the whole function itself
console.log( add(1,2,3) ) ; // 3
console.log( add(1) );	  // Not a Number
console.log( cb(3,3,add) ); // Result from the two numbers: 3+3=6
console.log( cb(4,3,sub) ); // Result from the two numbers: 4+3=1
console.log(cb(3,3,add)); // error, the brackets should be removed
console.log(cb(3,"hh",add));// Result from the two numbers: 3+hh=3hh

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

console.log( add(1,2,3) ) ; // 3
console.log(cb(3,3,add())); // TypeError: callback is not a function - undefined
console.log(cb(3,"hh",add));// Result from the two numbers: 3+hh=3hh

// 4
function mul(n1, n2) {
    return n1 * n2;
}
console.log( cb(3,3,mul) ); // Result from the two numbers: 3+3=9
console.log( cb(4,3,mul) ); // Result from the two numbers: 4+3=12

// 5
var div = function(n1, n2) {
    return n1 / n2;
}
console.log( cb(3,3,div) ); // Result from the two numbers: 3+3=9
console.log( cb(4,3,div) ); // Result from the two numbers: 4+3=12

// Callbacks

// 1
var boyz = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
function sortThree(boy) {
    return boy.length <= 3;
}
var only3 = boyz.filter(sortThree);
console.log(only3);

// 2

// 3

// 4

// 4a

// 4b


// Asynchronous Callbacks

// 1

// 2

// 3

// 4


// Objects

// 1

// 2


// Reusable Modules with Closures

// 1

// 2




