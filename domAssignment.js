//Assignment 9.1

function averageMark() {
    // Selects the given IDs, and then takes the second child which is the cell that contains the mark.
    const mark1 = document.querySelectorAll("#course1 > td")[1];
    const mark2 = document.querySelectorAll("#course2 > td")[1];
    const mark3 = document.querySelectorAll("#course3 > td")[1];
    const mark4 = document.querySelectorAll("#course4 > td")[1];

    // Converts the mark variables into an innerHTML array
    let grades = [mark1.innerHTML, mark2.innerHTML, mark3.innerHTML, mark4.innerHTML];
    // console.log(grades);

    // Calculates the average
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        // Converts the string to float
        total += parseFloat(grades[i]);
    }
    let average = total / grades.length;
    let roundedAverage = average.toFixed(1);
    // Leaves number with one decimal 
    console.log(roundedAverage);

    // Creates new tr and td for the average
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdValue = document.createElement("td");

    // Defines what should be included in the td 
    tdName.innerText = "Average grade";
    tdValue.innerText = roundedAverage;

    // Adds the new tr and td to the table
    table.appendChild(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdValue);

}

averageMark();

// Assignment 9.2

function changeBgColor() {
    // Select children of course class, which are the list items
    const list = document.querySelectorAll(".course > li");
    // console.log(list);

    // Loops through list items
    for (let i = 0; i < list.length; i++) {
        let row = list[i];
        // console.log(row);

        // Calculates even rows and turns them red
        if (i % 2 !== 0) {
            row.style.backgroundColor = "red";
        }
    }
}

changeBgColor();

// Assignment 9.3
/**
 *
 *
 * @param {string} imageSrcName - link the image source
 */
function createImageElement(imageSrcName) {
    // Selects body tag
    const body = document.querySelector("body");

    // Creates new element for the image
    const image = document.createElement("img");
    // Source attribute is set to function parameter
    image.setAttribute("src", imageSrcName);

    // Adds the new element to the body
    body.appendChild(image);
};

createImageElement("https://picsum.photos/id/125/150/150");