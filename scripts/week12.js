console.log("This is a log function from the console")

// Making our own functions

// function keyword to define a name
// use camelCase
// parenthesis for parameters
// Curly braces define the block of code

function drinkCofee() {
    console.log("I make a cuppa");
    console.log("I don't add any sugar or milk")
    console.log("I'm taking a sip");
}

// Call the function to make the browser execute it
// drinkCofee();

// for (let i = 1; i <= 10; i++){
//     drinkCofee();
//     console.log("Another one!")
// }

// This is more general, takes a parameter
function drinkAny(beverage) {
    if (beverage === "coffee") {
        drinkCofee();
        return;
    };
    console.log("Pour " + beverage);
    console.log("Drink " + beverage);
}


drinkAny("hot cummies")

// Make a function that will take some text and DOM id and append to text content

function appendTextToElemen(text, id){
    const element = document.querySelector("#" + id);
    element.textContent += text;
}

function drinkAndPrint(beverage, id){
    drinkAny(beverage);
    appendTextToElemen(drinkAndReturn(beverage), id);
}

drinkAndPrint("hot cummies", "function-output")

// If u use return, you can save it!

function drinkAndReturn(beverage){
    return "Drunk " + beverage;
}

const result = drinkAndReturn("hot chocolate")
console.log(result)


// let's make a function that makes a new list item

function addToList(ul, text){
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

const ul = document.querySelector("#list");
addToList(ul, "Yabba")
addToList(ul, "Dabba");
addToList(ul, "Doo");