/**
 * @param {number} num - Amount of fibonacci numbers to generate
 * Calculates the Fibonacci sequence (Xn = Xn-1 + Xn-2)
 */

function fibonacci(num) {

    let x = 0
    let y = 1;
    let z = 1;

    while (num > 0) {
        z = y;
        y = y + x;
        x = z;
        num--;
    }
    return x;
} 

for (let i = 1; i <= 10; i++) {
    console.log(fibonacci(i));
}

// Schrijf een functie countdown die van 10 - 1 aftelt (dit wordt ook in de console getoond).
// Geef aan de functie een jaartal parameter mee die als hij bij ‘0’ is zegt ‘Happy {jaartal}’.

/**
 * 
 * @param {number} year - The current year to show on the count of 0
 * Counts down from 10 to one and greets at 0
 */

function countdown(year) {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }

    console.log("Happy " + year);
}

countdown(2020); 

/**
 * 
 * @param {number} a - Just an example to show how hoisting works, no actual meaning
 * @param {number} b - Just an example to show how hoisting works, no actual meaning
 * Shows the difference between function expressions and declarations regarding hoisting
 */

// Expression
// console.log(x(5, 6)); // Is not possible: Uncaught ReferenceError: Cannot access 'x' before initialization
let x = function (a, b) {return a * b}; 
console.log(x(5, 6));


//Declaration
// Hoisting is possible here
console.log(myFunction(5, 6));
function myFunction(a, b) {return a * b};




