'use strict';

let classroom = new Set();

let stevenJ = { name: 'Steven', age: 22},
    sarah =  { name: 'Sarah', age: 23};

classroom.add(stevenJ);
classroom.add(sarah);

if (classroom.has(stevenJ)) console.log('stevenJ is in the classroom');