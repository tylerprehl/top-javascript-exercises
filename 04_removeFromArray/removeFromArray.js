const removeFromArray = function(inputArray, ...values) {
    for (let i=0; i<values.length; i++) {
        console.log(`Value to Remove: ${values[i]}`);
        console.log(`Type of Value: ${typeof values[i]}`);
        if (inputArray.includes(values[i])) {
            let valueIndex = inputArray.indexOf(values[i]);
            console.log(`Index of Value in OG: ${valueIndex}`);
            inputArray.splice(valueIndex, 1);
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
