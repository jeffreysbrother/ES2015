'use strict';


// the var keyword has function level scoping
var hello = 'hello';

function sayHi() {
    var hello = 'hi';
    console.log(hello);
}

sayHi();
console.log(hello);