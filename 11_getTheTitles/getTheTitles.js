const getTheTitles = function(books) {
    let titles = [];
    books.forEach(book => {
        for (prop in book) {
            console.log(`Prop: ${prop}   Value: ${book[prop]}`);
            if (prop === "title") {
                titles.push(book[prop]);
            }
        }
    })
    console.log(titles);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
