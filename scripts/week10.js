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
comparison2.innerText += " (some extra text)"

const comparison3 = document.getElementById("comparison3");
const result3 = 5!== 4;
comparison3.innerText = result3;

console.log("Both sides are true >> true");
console.log("5 === 5 && 5 === 5",(5 === 5) && (5 === 5));
console.log("One is true, one is false >> false");
console.log("5 === 5 && 5 === 6",(5 === 5) && (5 === 6));
console.log("Only one needs to be true in OR for it to >> true");
console.log("5 === 5 || 5 === 4",(5 === 5) || (5 === 4));
console.log("5 === 3 || 5 === 1",(5 === 3) && (5 === 1));
console.log("!(5 === 6)",(!(5 === 6)));


let toggle = true;
document.getElementById("toggle").innerText = toggle;

let isRaining = true;

if(isRaining) {
console.log("It is raining");
} else {
console.log("It's sunny!")
}

let age = 18;

if(age > 120){
    console.log("Too old")
} else if (age < 18) {
    console.log("Too young")
} else {
    console.log("You are", age, ". Go vote!")
}