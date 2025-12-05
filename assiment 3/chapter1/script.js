// chapter 1
// Q 1
let city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    console.log("Welcome to city of lights");
} else {
    console.log("Welcome!");
}


// Q 2
let gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma’am.");
} else {
    console.log("Invalid gender input");
}


// Q 3
let signal = prompt("Enter traffic signal color (red/yellow/green):");
signal = signal.toLowerCase();

if (signal === "red") {
    console.log("Must Stop");
} else if (signal === "yellow") {
    console.log("Ready to move");
} else if (signal === "green") {
    console.log("Move now");
} else {
    console.log("Invalid signal color");
}

// Q 4
var fuel = prompt("Enter remaining fuel in litres:");

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Q 5 (a)
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// Q 5 (b)
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// Q 5 (c)
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

// Q 5 (d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// Q 5 (e)
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

// Q 6
let sub1 = +prompt("Enter marks of Subject 1:");
let sub2 = +prompt("Enter marks of Subject 2:");
let sub3 = +prompt("Enter marks of Subject 3:");

let totalMarks = +prompt("Enter total marks (e.g. 300)");

let obtained = sub1 + sub2 + sub3;
let percentage = (obtained / totalMarks) * 100;

let grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("Total marks : " + totalMarks + "<br>");
document.write("Marks obtained : " + obtained + "<br>");
document.write("Percentage : " + percentage.toFixed(2) + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks);

// Q 7
let secret = 7;  
let guess = +prompt("Guess the secret number (1 to 10):");

if (guess === secret) {
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
}
else {
    alert("Try again!");
}

// Q 8
let num = +prompt("Enter a number:");

if (num % 3 === 0) {
    alert("The number is divisible by 3");
} 
else {
    alert("Not divisible by 3");
}

// Q 9
let number = +prompt("Enter a number:");

if (number % 2 === 0) {
    alert("Even number");
}
else {
    alert("Odd number");
}

// Q 10
let T = prompt("Enter Temperature:");

T = Number(T);

if (T > 40) {
    alert("It is too hot outside.");
}
else if (T > 30) {
    alert("The Weather today is Normal.");
}
else if (T > 20) {
    alert("Today's Weather is cool.");
}
else if (T > 10) {
    alert("OMG! Today’s weather is so Cool.");
}
else {
    alert("It is very cold!");
}

// Q 11
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let op = prompt("Enter operation (+, -, *, /, %):");

let result;

if (op === "+") {
    result = num1 + num2;
}
else if (op === "-") {
    result = num1 - num2;
}
else if (op === "*") {
    result = num1 * num2;
}
else if (op === "/") {
    result = num1 / num2;
}
else if (op === "%") {
    result = num1 % num2;
}
else {
    alert("Invalid Operation!");
}

alert("Result: " + result);
