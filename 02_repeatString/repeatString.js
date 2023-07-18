const repeatString = function(text, repeatNum) {
    if(repeatNum < 0) {
        return "ERROR";
    }
    let finalText = "";
    for (let i = 0; i < repeatNum; i++) {
        finalText = finalText + text;
    }
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
