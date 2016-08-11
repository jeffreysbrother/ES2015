'use strict';

function greet(name = 'James', timeOfDay = 'Day') {
    // name = name || 'James';
    // timeOfDay = timeOfDay || 'Day';
    console.log(`Good ${timeOfDay}, ${name}!`);
}

greet();

//this does not work as expected