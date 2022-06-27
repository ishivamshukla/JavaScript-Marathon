// interger literals

0
100
0xff => 255
0b, 0B

// floting point literals

1.9
3.14
1.0e+100
3.03e=> 3.03 * 10^23


let billion = 1_000_000_000;

// arthemetic operators

// +, -, *, /, %, **, ++, --

Math.pow(2, 3); // 2^3
Math.paw(3, 1/3); // 3^(1/3)
Math.round(3.5); // 4
Math.ceil(3.5); // 4
Math.floor(3.5); // 3
Math.abs(-3.5); // 3.5
Math.sqrt(9); // 3
Math.min(1, 2, 3); // 1
Math.max(1, 2, 3); // 3
Math.random(); // random number between 0 and 1


// ES6 new methods

Math.cbrt(9); // 3
Math.hypot(3, 4); // 5
Math.clz32(0); // 32
comnsole.log(Math.trunc(3.5)); // 3


// Infinity, no errors; just Infinity
// divide by 0; it's just NaN

console.log(Number.)

Number.MAX_SAFE_INTEGER
Number.isNaN(NaN); // true
Number.isFinite(Infinity); // false

parseInt // convert string to integer

console.log(Number.parseInt("123")); // 123
console.log(Number.parseInt("123.45")); // 123
console.log(Number.parseInt("123.45", 10)); // 123

// 

let statementOne = .3 - .2; // 0.10000000000000001
let statementTwo = .3 - .2; // 0.09999999999999999

console.log(statementOne === statementTwo); // false
console.log(statementOne == .1); // true
console.log(statementtwo == .1); // true



// BigInt

let bigInt = BigInt(123);

let google = "1" + "0".repeat(100)

