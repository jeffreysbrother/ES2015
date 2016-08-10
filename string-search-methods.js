'use strict';

//three ways to search
let strToSearch = 'a-really-long-hyphenated-string';

//RegEx
console.log(/^a-really/.test(strToSearch));
//indexOf method
console.log(strToSearch.indexOf('a-really') === 0);
//startsWith method (new in ES2015)
console.log(strToSearch.startsWith('a-really'));



//startsWith()
//endsWith()
//includes()