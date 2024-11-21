console.log("Let's talk switches!")
// lets see a switch statement in action.

const today = "Thursday"
let message = ""

switch (today){
    case "Monday":
        console.log("Today is Monday");
        message = "Today is Monday";
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        message = "Today is Tuesday";
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        message = "Today is Wednesday";
        break;
    case "Thursday":
        console.log("Today is Thursday");
        message = "Getting closer to Friday!";
        break;
    default:
        console.log("This is wrong");
        message = "Alien invasion";
}

const switchExample = document.getElementById("switch-example");
switchExample.textContent = message;

// WHILE LOOPS

console.log("A WHILE loop.")
let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

console.log("Some random script that chages div content.")
let j = 1;
while (j <= 3){
    const block = document.querySelector("#block-" + j);
    block.textContent += " yabbadabba doo " + j;
    j++;
}

// while(true) {
//     console.log("Infinite loop!");
//     break;
// }
console.log("Now a FOR loop!")
for (let k = 1; k <= 5; k++){
    console.log(k)
}