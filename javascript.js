// Loop from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// Using do-while loop
let count = 1;
do {
    console.log("Count:", count);
    count++;
} while (count <= 5);

// Using while loop
let num = 1;
while (num <= 5) {
    console.log("Number:", num);
    num++;
}

// Initializing arrays
let marks = [97, 82, 75, 64, 66];

// Updating the first element
marks[0] = 66;
console.log(marks);

let heroes = ["ironman", "hulk", "thor", "batman"];
// Updating the first element
heroes[0] = "superman";
console.log(heroes);

let info = ["rahul", 86, "Delhi"];
// Updating the first element
info[0] = "Amit";
console.log(info);

// Looping through a string
let text = "Hello";
for (let char of text) {
    console.log(char);
}

// Declare mark array before using it
let mark = [85, 97, 44, 37, 76, 60];

let total = 0; // Renamed sum variable to avoid conflict
// Loop through the array and calculate the sum
for (let val of mark) {
    total += val;
}

// Calculate the average
let avg = total / mark.length;

// Log the average to the console
console.log(`Average marks of the class = ${avg}`);


let foodItems = ["potato", "apple", "litchi", "tomato"];

console.log(foodItems);            // Logs the array as it is
console.log(foodItems.toString()); // Converts the array to a string and logs it
console.log(foodItems);            // Logs the array again to show it remains unchanged

let arr = [1, 2, 3, 4, 5, 6, 7];

// Replace an element at index 3
arr.splice(3, 1, 101);
console.log(arr);

// Using pop() method
console.log(foodItems); // Logs the original array

let deletedItem = foodItems.pop(); // Removes the last element

console.log(foodItems); // Logs the updated array
console.log("Deleted item:", deletedItem); // Logs the removed item

function displayMessage(message) {
    // Parameter -> input
    console.log(message);
}

displayMessage("JavaScript is awesome!");

// Function to print a message
function printMessage(msg) {
    console.log(msg);
}
printMessage("I love JS");

// Sum function with proper scope
function calculateSum(x, y) { // Renamed to avoid conflict
    let s = x + y;
    console.log("Sum inside function:", s);
    return s;
}
let val = calculateSum(3, 4);
console.log("Returned Sum:", val);

// Fixed scope issue (x is not defined globally)
console.log("Variable x is not accessible here");

// Sum and multiplication functions
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Arrow function for sum
const arrowSum = (a, b) => {
    console.log("Sum:", a + b);
};

// Arrow function for multiplication
const arrowMul = (a, b) => {
    console.log("Multiplication:", a * b);
};

// Function calls
console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(10, 5));

arrowSum(7, 3);
arrowMul(4, 6);

function abc() {
    console.log("hello");
}

function myFunc(callback) {
    return callback;
}

let array = [1, 2, 3, 4, 5];

// Fixed error: Changed arr.forEach to array.forEach
array.forEach(val => console.log(val));