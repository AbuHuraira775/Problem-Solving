const check = require("./contain-duplicates/index");

// question 1
const arr = [1, 2, 3, 8, 11, 7, 10, 20, 27, 22, 1];
const sortArr = arr.sort((a, b) => a - b);
console.log(check(sortArr)); // true


// question 2