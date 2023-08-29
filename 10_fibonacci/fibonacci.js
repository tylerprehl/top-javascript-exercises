const fibonacci = function(seqNum) {
    if (seqNum < 0) {return "OOPS"}

    seqNum = Number(seqNum);
    
    fibSequence = [1, 1];
    for (let i=2; i<seqNum; i++) {
        let num1 = fibSequence.slice(-1);
        let num2 = fibSequence.slice(-2, -1);
        fibSequence.push(num1[0]+num2[0]);        
    }
    console.log(`Fib Sequence: ${fibSequence}`);
    return fibSequence.slice(-1)[0];
};

// Do not edit below this line
module.exports = fibonacci;
