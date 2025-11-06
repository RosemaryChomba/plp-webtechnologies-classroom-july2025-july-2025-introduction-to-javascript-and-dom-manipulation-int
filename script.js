// ===============================
// Part 1: Variable Declarations & Conditionals
// ===============================
let userName = "Rosemary";
let userAge = 22;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// ===============================
// Part 2: Custom Functions
// ===============================
function greetUser(name) {
  return `Hello, ${name}! Welcome to the project.`;
}

function multiplyNumbers(a, b) {
  return a * b;
}

console.log(greetUser(userName));
console.log("5 × 3 =", multiplyNumbers(5, 3));

// ===============================
// Part 3: Loops
// ===============================

// Example 1: for loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// Example 2: while loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// ===============================
// Part 4: DOM Interactions
// ===============================

// 1. Change text content of an element
document.getElementById("pageTitle").style.color = "darkblue";

// 2. Add an event listener to change greeting
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("greeting").textContent = greetUser(userName);
});

// 3. Display a list of numbers when button clicked
document.getElementById("countBtn").addEventListener("click", function () {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  document.getElementById("output").textContent = "Numbers: " + output;
});
