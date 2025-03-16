// 6. Arrow function to count vowels

const countVowelsArrow = (str) => {
    return str.split('').filter(char => "aeiouAEIOU".includes(char)).length;
};
console.log("Vowel Count (Arrow Function):", countVowelsArrow("Hello World"));