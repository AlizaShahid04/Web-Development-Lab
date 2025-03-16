// 5. Function to count vowels in a string

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Vowel Count:", countVowels("Hello World"));