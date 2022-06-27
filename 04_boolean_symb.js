// boolean

let score = 100;

if (score === 100) {
    console.log("You are a genius");
}

// false value 
let isValid = false;

undefined;
null;
NaN;
0;
"";
-0;
Infinity;

console.log.apply(typeof(false.toString())); // "boolean"

// null: special object whose value is "no object"

console.log(typeof(null)); // "object"
console.log(typeof(undefined)); // "undefined"
console.log(typeof(NaN)); // "number"
console.log(typeof(0)); // "number"
console.log(typeof("")); // "string"
console.log(typeof(-0)); // "number"
console.log(typeof(Infinity)); // "number"
console.log(typeof(true)); // "boolean"


// undefined is a predefined global constant.
// null is a language keyword.

// Both define absense of value
// ==, ===, !=, !== show the difference between two values

// Symbol 

String("Shivam")
"Shivam"


String(Symbol("foo")); // "Symbol(foo)"


let mySymbol = Symbol("foo");
console.log(mySymbol); // Symbol(foo)

let priority = Symbol("priority1");
let priority2 = Symbol("priority2");
console.log(priority1 === Priority2 ); // false

const WIN = Symbol("WINDOW");
const AILE = Symbol("AILE");
const MID =Symbol("MID");

const crew = Symbol("WINDOW")

function getSeat(getValue) {
    switch (getValue) {
        case WIN:
            return "SEAT is at WINDOW";
        case AILE:
            return "SEAT is at AILE";
        case MID:
            return "SEAT is at MID";
        default:
            return "NO SEAT";
    }
}
console.log(getSeat("crew")); // "SEAT is at WINDOW"
 

// react 
// card, card 


// Global object

// constants like: Infinity, NaN, undefined, null, true, false, Symbol
// functions like: isNaN(), parseInt(), eval()
// Constructor like: Date(), String(), Object(), RegExp(), Map(), Set(), WeakMap(), WeakSet()
// Math, JSON

// these are not reseved keywords, null is a reserved keyword

// global object should be treated as reserved

// Node Global and Browser Global

// node: global
// browser: window


console.log(this); // Window

// ES2020 globalThis

console.log(globalThis); // Window

