// let's explore arrays
console.log("Arrays");

const cars = ["Saab", "Volvo", "BMW", "Audi", "Skoda", "Citroen", "Fiat"]
console.log("First car: " + cars[0])
console.log("Last car: " + cars[cars.length-1])
console.log("Second to last car: " + cars[cars.length-2])

// function addToList(ul, text, myclass=""){
//     const li = document.createElement("li");
//     li.textContent = text;
//     if (myclass) {
//         li.classList.add(myclass);
//     }
//     ul.appendChild(li);
// }
// // we added myclass to the function

// const list_el = document.querySelector("#array-list")

// // iterate through the array and add cars
// for (let i =0; i <cars.length; i++){
//     console.log("Car", cars[i]);
//     // addToList(list_el, cars[i], "car")
//     if (i % 2 === 0){
//         addToList(list_el, cars[i], "even-car");
//     } else
//     addToList(list_el, cars[i], "odd-car");
// }

// let's make a main function that fires when the page is loaded
function addCars(){
    function addToList(ul, text, myclass=""){
        const li = document.createElement("li");
        li.textContent = text;
        if (myclass) {
            li.classList.add(myclass);
        }
        ul.appendChild(li);
    }
    // we added myclass to the function
    
    const list_el = document.querySelector("#array-list")
    
    // iterate through the array and add cars
    for (let i =0; i <cars.length; i++){
        console.log("Car", cars[i]);
        // addToList(list_el, cars[i], "car")
        if (i % 2 === 0){
            addToList(list_el, cars[i], "even-car");
        } else
        addToList(list_el, cars[i], "odd-car");
    }
    
}
//This is the thing that catches the moment when the document isfully loaded and runs the function then
window.addEventListener("load", addCars)



// Find the button
const addCarButton = document.querySelector("#add-car-button");
function addCarToArray(){
    console.log("Add car fired");
    const input_el = document.querySelector("#car-input");
    const car = input_el.value;
    console.log("Will add car: ", car);
    cars.push(car);
}

// Handler for click event - fire function when button is clicked
addCarButton.addEventListener("click", addCarToArray);

// let's create a function thatprints to console the current value of the input field

input_el.addEventListener("change", printChangedValue);
function printChangedValue(){
    const input_el = document.querySelector("#array-list");
    const printValue = input_el.value;
    console.log(input_el);
}

// WHAT THE FUCK is going on right now holy shit

const clear_all_button = document.querySelector("#clear-all-button");
function clearAll(){
    const input_el = document.querySelector("#array-list");
    input_el.value = "";
    // ...
}

const rebuild_all_button = document.querySelector("#rebuild-all-button");
function rebuildAll(){

}