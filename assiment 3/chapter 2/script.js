// chapter 2
// Q 1
let ch1 = prompt("Enter a character:");

let ascii = ch1.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("It is a Number.");
}
else if (ascii >= 65 && ascii <= 90) {
    console.log("It is an Uppercase Letter.");
}
else if (ascii >= 97 && ascii <= 122) {
    console.log("It is a Lowercase Letter.");
}
else {
    console.log("Invalid Character.");
}

// Q 2
let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

if (a > b) {
    console.log(a + " is larger.");
}
else if (b > a) {
    console.log(b + " is larger.");
}
else {
    console.log("Both numbers are equal.");
}

// Q 3
let num = parseInt(prompt("Enter a number:"));

if (num > 0) {
    console.log("Positive number.");
}
else if (num < 0) {
    console.log("Negative number.");
}
else {
    console.log("Zero.");
}

// Q 4
let ch2 = prompt("Enter a character:").toLowerCase();

if (ch2 == "a" || ch2 == "e" || ch2 == "i" || ch2 == "o" || ch2 == "u") {
    console.log("True – It is a vowel.");
} 
else {
    console.log("False – It is not a vowel.");
}

// Q 5
let correctPassword = "12345";
let userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null) {
    console.log("Please enter your password");
}
else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
}
else {
    console.log("Incorrect password");
}

// Q 6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);

// Q 7
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

if (time >= 0 && time < 1200) {
    console.log("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
}
else {
    console.log("Invalid time");
}
