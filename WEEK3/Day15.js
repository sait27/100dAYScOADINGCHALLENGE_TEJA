var oldSchool = "I can be redeclared or updated";
let modernVariable = "I can be updated but not redeclared within the same scope";
const constantValue = "I cannot be updated or redeclared";

console.log("Hello, world!"); // Prints: Hello, world!

// Addition
console.log(5 + 2);  // Output: 7

// Subtraction
console.log(5 - 2);  // Output: 3

// Multiplication
console.log(5 * 2);  // Output: 10

// Division
console.log(5 / 2);  // Output: 2.5

// Modulus (Remainder)
console.log(5 % 2);  // Output: 1

// Increment
let a = 5;
console.log(++a);    // Output: 6

// Decrement
let b = 5;
console.log(--b);    // Output: 4


// Assignment
let c = 10;
console.log(c); // Output: 10

// Addition assignment
c += 5; // c is now 15
console.log(c); // Output: 15

// Subtraction assignment
c -= 3; // c is now 12
console.log(c); // Output: 12

// Multiplication assignment
c *= 2; // c is now 24
console.log(c); // Output: 24

// Division assignment
c /= 4; // c is now 6
console.log(c); // Output: 6

// Remainder assignment
c %= 4; // c is now 2
console.log(c); // Output: 2



// Equal to
console.log(5 == "5");  // Output: true

// Not equal to
console.log(5 != "6");  // Output: true

// Strictly equal to
console.log(5 === "5"); // Output: false

// Strictly not equal to
console.log(5 !== "5"); // Output: true

// Greater than
console.log(5 > 3);     // Output: true

// Less than
console.log(5 < 3);     // Output: false

// Greater than or equal to
console.log(5 >= 5);    // Output: true

// Less than or equal to
console.log(5 <= 5);    // Output: true


// Logical AND
console.log((5 > 3) && (5 < 10)); // Output: true

// Logical OR
console.log((5 < 3) || (5 == 5)); // Output: true

// Logical NOT
console.log(!(5 == 5));           // Output: false

