// 9. Take input n and create an array of numbers

const n = parseInt(prompt("Enter a number for array size:"));
const newArray = Array.from({ length: n }, (_, i) => i + 1);
console.log("Generated Array:", newArray);