// Checks if a number is odd or even
let num = 12;

if(num % 2 == 1) {
    console.log(`The number ${num} is odd`);
} else {
    console.log(`This number ${num} is even`);
}

// Replaces "not" in the sentence with a blank
let statement = "Programming is not so cool";
let rightStatement = statement.replace("not", "");
console.log(rightStatement); 

/*Compares number with text string.
It does not make sense to do this,
since a number and a string cannot be compared,
because they are completely different things. 
*/
if("I live in Naboo." > 1400) {
    console.log("Are you drunk?");
} else {
    console.log("Nope");
}







