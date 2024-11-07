//we will showcase JS comparison operators,, logical operators and conditional statements//

console.log("Starting our lesson on comparison operators");
console.log("Is 2> 3 ?", 2 > 3);
console.log("Is 5 < 10 ?", 5 < 10);


console.log("Comparing two integers");
console.log("Is 2 === 2 ?", 2 === 2);

console.log("Comparing an integer and a string");
console.log("Is 2 === '2' ?", 2 === '2');

//our html doc has span elements with IDs ranging from 1 to 3//
// we can use that for something, I don't know.//
document.getElementById("comparison1").innerText = 5 ==5;
//we get the whole web document first
// then we find a particular element by a specific ID
//then we change the span element content to the result of 5 == 5.
// we can also save an element in const

const comparison2 = document.getElementById("comparison2")
comparison2.innerText = 5 === '5'

const comparison3 = document.getElementById("comparison3");
const result3 = 5!== 4;
comparison3.innerText = result3;

