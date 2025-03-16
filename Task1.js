// 1. Find even numbers using for-of loop in an array
const numbers = [10, 23, 45, 6, 78, 89, 12];
const evenNumbers = [];
for (const num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}
console.log("Even Numbers:", evenNumbers);