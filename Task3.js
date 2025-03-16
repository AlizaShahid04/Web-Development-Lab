// 3. Convert each string in an array to uppercase using for-of loop

const strings = ["apple", "banana", "cherry"];
const upperCaseStrings = [];
for (const str of strings) {
    upperCaseStrings.push(str.toUpperCase());
}
console.log("Uppercase Strings:", upperCaseStrings);