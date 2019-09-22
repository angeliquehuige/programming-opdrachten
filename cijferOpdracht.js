/* Opdracht 1
Checks the mark for the result*/
let mark = 8;

if(mark < 6) {
    console.log("Je hebt onvoldoende gescoord");
} else if(mark >= 6 && mark <= 7) {
    console.log("Je hebt voldoende gescoord");
} else if(mark > 7 && mark <=9) {
    console.log("Je hebt goed gescoord");
} else if(mark > 9) {
    console.log("Je hebt uitmuntend gescoord");
} else {
    console.log("Onbekende score");
}

/*Opdracht 2
Checks the mark with a switch statement*/
mark = 7;

switch (mark) {
    case mark < 6: 
    console.log("Je hebt onvoldoende gescoord");
    break;

    case mark >= 6 && mark <=7:
    console.log("Je hebt voldoende gescoord");
    break;

    case mark > 7 && mark <=9:
    console.log("Je hebt goed gescoord");
    break;

    case mark > 9:
    console.log("Je hebt uitmuntend gescoord");
    break;

    default: 
    console.log("Onbekende score");
}

/* Opdracht 3
Check if a book can be read*/ 

let purchasedBook = true;
let job = "teacher";
let inTrain = false;

if(purchasedBook == true && inTrain == true && job == "teacher") {
    console.log("Finally I can enjoy my book!");
} else {
    console.log("I'm not able to read a book now");
}
