'use strict';

//concatenate expressions at runtime
let str = 'My favorite number is';
console.log(str, 5);
     // -> My favorite number is 5

// template strings with backticks
const student = { name: 'James', followerCount: 34 };
let interpolate = `"The person's name was ${student.name}"`;
console.log(interpolate);