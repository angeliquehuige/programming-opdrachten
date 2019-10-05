// Generates a random number from the given array.
const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

const randomNumber = function () {
   console.log(lapRounds[Math.floor(Math.random() * lapRounds.length)]); 
    
}

randomNumber(lapRounds);

/**
 * @param {number} lapRound - Each value in the array
 * Prints all lap rounds with a time under 4
 */
const filteredLapRounds = lapRounds.filter(lapRound => {
    if (lapRound < 4) {
        return lapRound;
    }
});

console.log(filteredLapRounds);

// Prints all values of the nested array
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

const printRecords = function () {
    for (let row = 0; row < allMyRecords.length; row++) {
    for (let column = 0; column < allMyRecords[row].length; column++) {
        console.log(allMyRecords[row][column]);
        
    }
    }
}

printRecords();
