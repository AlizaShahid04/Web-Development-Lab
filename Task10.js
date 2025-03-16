// 10. Use reduce method to calculate product of all numbers in an array

const numbersForProduct = [1, 2, 3, 4, 5]; // Ensure array is defined
const product = numbersForProduct.reduce((acc, num) => acc * num, 1);
console.log("Product of all numbers:", product);