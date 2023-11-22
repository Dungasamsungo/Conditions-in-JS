// // // Hour
// // //  if hour is betweeen 6am and 12pm: Good Morning
// // //  if it is between 12pm and 6pm: Good afternoon 
// // //  Otherwise: Good evening 


// // // var hour = 13

// // // if(hour >= 1 && hour < 12)
// // // console.log("Good Morning!");
// // // else if(hour >= 12 && hour < 18)
// // // console.log("Good Afternoon!");
// // // else
// // // console.log("Good evening")


// // // Guess the number Game
// // // prompt user for a number
// // // Test if the number matches a number in a variable
// // // if number is lower, tell user 
// // // if higher tell user
// // // when correct, congratulate the user 

// const prompt = require("prompt-sync")(); // this gets user input

// var secretNumber = 9;
// var userGuess = parseInt(prompt("What's your guess? "));

// while (True){



// if(userGuess == secretNumber){
//     console.log("Congratulations! You guessed it.");
// }
   
// else if(userGuess < secretNumber){
//     console.log("Wrong guess. Guess Higher");
// }
   
// else
//     console.log("Wrong guess. Guess lower");
    
// };


/*let  age = 12
age += 5     


let n1 = 6
n1 ++ 
console.log(age, n1)

let n2 = 10
console.log(++n2)
console.log(n2)

console.log(n2++)
console.log(n2)
*/

let value = true;

switch (typeof value){
    case "number":
        console.log("Number")
        break;
    case "string":
        console.log("String")
        break;n
    default:
        console.log("others");
}

