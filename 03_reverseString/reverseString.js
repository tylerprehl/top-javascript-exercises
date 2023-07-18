const reverseString = function(text) {
    let finalString = "";
    originalLength = text.length;
    for (let i=0; i<originalLength; i++) {
        finalString = finalString + text.substring(text.length-1, text.length);
        text = text.substring(0, text.length-1);
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
