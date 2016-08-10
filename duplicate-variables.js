'use strict';

var student = { name: 'Ken' };
var student = { name: 'James' };

console.log(student); //this will return { name: 'James' }







//using "const" will cause an exception to be thrown

const girl = { name: 'Hannah' };
var girl = { name: 'Cara' };

//this error will happen when you attempt to overwrite a constant in the same scope
//you can declare a let or const variable with the same name in a DIFFERENT scope

//use let when you need to reassign a variable or scope a variable at the block level
//use const when when you don't want a variable's value to change throughout your project