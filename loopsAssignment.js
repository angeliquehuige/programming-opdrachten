// Checks if a series of numbers is divisible by 4. 
let a = 20;

while (a) {
    console.log(`The number is ${a}.`);
    if (a % 4 === 0) {
        console.log('It is divisible by 4!');
        
    } else {
        console.log("Sorry, can't divide by 4");
    }
    a--;
}

// Calculates the Fibonacci sequence (Xn = Xn-1 + Xn-2)
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

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));

// Calculates sum of array
var numArray = [2, 4, 8, 9, 12, 13]; 
var sum = 0;

for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
}

console.log(`The sum of the array is ${sum}`);

