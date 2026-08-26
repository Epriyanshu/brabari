
// =====================================================
// SECTION 1 - VARIABLES
// =====================================================

// Question 1: Profile Builder

let fullName = "Priyanshu Kumar";
let age = 18;
let currentSemester = 4;
let hasLaptop = true;
let averageAttendance = 85.5;

console.log("Q1 Profile:");
console.log(fullName);
console.log(age);
console.log(currentSemester);
console.log(hasLaptop);
console.log(averageAttendance);


// =====================================================
// Question 2: Fix the Errors
// =====================================================

let city = "Delhi";
let graduationYear = "2027";
let isHosteller = true;
let cgpa = 8.5;

let student = {
    course: "BSc",
    collegeName: "Govt College"
};

console.log("\nQ2 Corrected Variables:");
console.log(city);
console.log(graduationYear);
console.log(isHosteller);
console.log(cgpa);
console.log(student);


// =====================================================
// Question 3: Swap Values
// =====================================================

let firstName = "Arjun";
let lastName = "Reddy";

let temp = firstName;
firstName = lastName;
lastName = temp;

console.log("\nQ3 Swap:");
console.log(firstName);
console.log(lastName);


// =====================================================
// SECTION 2 - TYPE CONVERSION
// =====================================================

// Question 1: Predict the Output

console.log("\nType Conversion Q1:");

console.log("20" - "5" + 3);
console.log(4 + "6" - 2);
console.log("8" * 2 + "2");
console.log("7" + 2 * 3);


// =====================================================
// Question 2: Implicit Conversion
// =====================================================

// String concatenation

let name = "Priyanshu";
let studentAge = 18;

console.log("\nImplicit String Concatenation:");
console.log(name + studentAge);


// Numeric conversion using -

let price = "100";
let discount = 20;

console.log("\nImplicit Numeric Conversion:");
console.log(price - discount);


// Numeric conversion using *

let quantity = "5";
let itemPrice = 10;

console.log(quantity * itemPrice);


// =====================================================
// Question 2 Part B: Explicit Conversion
// =====================================================

// Number conversion

let value = Number("25");

console.log("\nExplicit Number Conversion:");
console.log(value);
console.log(typeof value);


// String conversion

let text = String(25);

console.log("\nExplicit String Conversion:");
console.log(text);
console.log(typeof text);


// Boolean conversion

let result = Boolean(1);

console.log("\nExplicit Boolean Conversion:");
console.log(result);
console.log(typeof result);


// =====================================================
// Question 3: Mix Data Types
// =====================================================

let a = "5";
let b = 2;
let c = true;

console.log("\nMix Data Types:");

console.log(a + b + c);
console.log(Number(a) + b + c);
console.log(a - c);
console.log(a * (b + c));

