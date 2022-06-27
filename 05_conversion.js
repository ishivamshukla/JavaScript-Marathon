// primitive values

// String("Shivam")
// undefined, null, string, number: no change

let myString = "Shivam";
myString.toLowerCase(); // "shivam"

// objects are mutable (you can change them)

let myObject = {name: "Shivam"};
myObject.name = "notShivam"; // "notShivam"
myObject.lastname = "Shukla"; // "Shukla"

// arrays are mutable (you can change them)

let myArray = ["Shivam", "Shukla"];
let heroScore = [10, 20, 30, 40, 50];
heroScore[1] = 5

// Onject are called as reference type
// reference is assigned to a variable

let arrayRef = [1, 2]

let anotherArrayRef = arrayRef

anotherArrayRef[0] = 5
console.log(arrayRef) // [5, 2]
console.log(arrayRef === anotherArrayRef) // true


let yetAnotherArrayRef = arrayRef.from(arrayRef)
console.log(yetAnotherArrayRef) // [5, 2]
console.log(arrayRef === yetAnotherArrayRef) // false

// +++++++++++++++++++++++++++++++++


// type conversion
// JS gets what JS wants

10 + "object"; // "10 object"
"7" * "3"; // 21

let num = 1 -"x"; // -1
console.log(num); // -1
console.log(num + " object"); // -1 object


// true gets to 1
// false, " " gets to 0

// forcefull conversion

Number("3"); // 3

let infosysStock =1600.4343
infosysStock.toFixed(2); // "1600.43"

console.log(Boolean(0)); // false
console.log(Boolean([])); // true


// objects to permitive value


// 1. perefer-string
// 2. perefer-number
// 3. No-preference
 

let colorvalue = 14
let binaryColorValue = colorvalue.toString(2)
console.log(binaryColorValue); // "1110"

console.log({1: "one"}.toString()); // "[object Object]"

let newDate = new Date(2022, 1, 1);
console.log(newDate.toString()); // "Tue Feb 01 2022 00:00:00 GMT+0530 (India Standard Time)"
console.log(newDate.valueOf());  // 1643653800000


// preferNumber => valueOf() => toString()

// [] => "" => 0 => 

























