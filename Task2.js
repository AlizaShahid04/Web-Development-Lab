// 2. Find max and min in an array using for-of loop

const numbers = [10, 23, 45, 6, 78, 89, 12]; // Define the numbers array

let max = numbers[0]; 
let min = numbers[0];

for (const num of numbers) {
    if (num > max) max = num;
    if (num < min) min = num;
}

console.log("Max:", max, "Min:", min);
