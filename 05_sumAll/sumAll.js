const sumAll = function(num1, num2) {
    console.log(`Type of num1: ${typeof num1}\nType of num2: ${typeof num2}`);
    if (num1 < 0 || num2 < 0 || (typeof num1) !== 'number' || (typeof num2) !== 'number' ) { 
        return "ERROR"; 
    }
    //let difference = Math.abs(num2-num1);
    let sum = 0;
    let lowerNum;
    let higherNum;

    if (num1 < num2) {
        lowerNum = num1;
        higherNum = num2;
    }
    else {
        lowerNum = num2;
        higherNum = num1;
    }

    for (let i = lowerNum; i <= higherNum; i++) {
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
