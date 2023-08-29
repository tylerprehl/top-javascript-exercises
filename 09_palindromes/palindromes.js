const palindromes = function (words) {
    console.log(`Original: ${words}`);
    words = words.replace(/[^A-Za-z0-9]/g, "");
    words = words.toLowerCase();
    let arrWords = words.split("");
    arrWords.reverse();
    let reversedWords = arrWords.join("");
    console.log(`Words: ${words}`);
    console.log(`Reversed: ${reversedWords}`);
    if (words === reversedWords) { 
        console.log("True");
        return true; 
    }
    else { 
        console.log("False");
        return false; 
    }
};

// Do not edit below this line
module.exports = palindromes;
