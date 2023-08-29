const findTheOldest = function(people) {
    return oldestPerson = people.reduce((oldest, curPerson) => {
        let oldestAge = 0;
        let curPersonAge = 0;
        
        if (oldest["yearOfDeath"] === undefined) {
            oldestAge = 2023 - oldest["yearOfBirth"];
        } else {
            oldestAge = oldest["yearOfDeath"] - oldest["yearOfBirth"];
        }

        if (curPerson["yearOfDeath"] === undefined) {
            curPersonAge = 2023 - curPerson["yearOfBirth"];
        } else {
            curPersonAge = curPerson["yearOfDeath"] - curPerson["yearOfBirth"];
        }

        console.log(`Oldest: ${oldest["name"]}   Cur Person: ${curPerson["name"]}`);
        console.log(`Oldest: ${oldestAge}   Cur Person: ${curPersonAge}`);

        if (curPersonAge > oldestAge) { return curPerson; }
        else { return oldest; }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
