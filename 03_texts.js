let dollar = "$"
let love = "\u2665"


console.log(dollar + love);
console.log(dollar.length);
console.log(love.length);


// '', "", ``, ```

// escape sequences

// \n, \t, \r, \b, \f, \v, \0, \x, \u, \U

let myString = "I am a string";

console.log(myString.substring(0, 3)); // I am

myString.slice(0, 3); // I am


myString.indexOf("a"); // 1

myString.indexOf("a", 2); // 3
myString.lastIndexOf("a"); // 3

myString.startsWith("+91"); // true
myString.endsWith("string"); // true
myString.includes("string"); // true

myString.toLocaleLowerCase(); // i am a string
myString.toLocaleUpperCase(); // I AM A STRING
myString.normalize(); // I AM A STRING


console.log("HDFC334433".padStart(10, "0")); // "HDFC334433"

"*".repeat(10); // "**********"

let score = "100";
let greeting = `\
${dollar} is at value of ${score}
\u2718
`;
console.log(greeting) 
// I a
// HDFC334433
// $ is at value of 100
// ✘


let myNewString = String.raw`\u2718`.length; // 1