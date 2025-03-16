let number = parseInt(prompt("Enter a number:"));

if (!isNaN(number)) {
  if (number % 3 === 0) {
    console.log(`${number} is a multiple of 3.`);
  } else {
    console.log(`${number} is not a multiple of 3.`);
  }
} else {
  console.log("Please enter a valid number.");
}
