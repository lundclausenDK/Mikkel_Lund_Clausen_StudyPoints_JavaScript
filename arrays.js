// JavaScript by Mikkel Lund Clausen / DAT / cph-mc259@cphbusiness.dk
// Below is the solutions for the studypoint exercises for js arrays

// a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
console.log(boys);
console.log(girls);

// b
var all = boys.concat(girls);
console.log(all);

// c
var allStrings = all.join();
var allHyphens = all.join(" - ");
console.log(allStrings);
console.log(allHyphens);

// d
all.push("Lone", "Gitte");
console.log(all);

// e
all.unshift("Hans", "Kurt");
console.log(all);

// f
all.shift();
console.log(all);

// g
all.pop();
console.log(all);

// h
all.splice(3, 2);
console.log(all);

// i
all.reverse();
console.log(all);

// j
all.sort();
console.log(all);

// k
all.splice(4, 1);
all.push("Hanne");
all.sort();
console.log(all);

// l
var allCaps = [];

for (var i = 0; i < all.length; i++) {
    var name = all[i].toUpperCase();
    allCaps.push(name);
}

console.log(allCaps);

// m
var bigL = [];

for (var i = 0; i < allCaps.length; i++) {
    if (allCaps[i].charAt(0) === "L") {
        bigL.push(allCaps[i]);
    }
}
 console.log(bigL);