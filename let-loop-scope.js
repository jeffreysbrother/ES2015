'use strict';

//a block can be a loop, if statement, or function

//IIFE initLoop()
(function initLoop() {
    function doLoop(x) {
        i = 3;
        console.log('loop:', x);
    }

    for (let i = 0; i < 10; i++) {
        doLoop(i + 1);
    }
})();

//this will throw an error because i is not defined
//i only exists in the scope of the for loop: block-level scoping