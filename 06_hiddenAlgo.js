10 + "mangoes"   // "10 mangoes"

"7" * "3" // "21"

console.log(Number("3")); // 3
console.log(Number("3.14")); // 3.14



// objects to permitive value 


// 1. perefer-string
// 2. perefer-number
// 3. No-preference
 

// toString()  ||  valueOf()

let colorvalue = 14
let binaryColorValue = colorvalue.toString(2)
console.log(binaryColorValue); // "1110"

console.log({1: "one"}.toString()); // "[object Object]"


let newDate = new Date(2022, 1, 1);
let dataString = newDate.toString(); 
console.log(newDate.valueOf());  // 1643653800000

