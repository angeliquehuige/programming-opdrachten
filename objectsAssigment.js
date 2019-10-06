// Object of given array with the lapstimes being the keys
const lapRounds = {
    firstLap: 55.99,
    secondLap: 63.00,
    thirdLap: 63.01,
    fourthLap: 54.01,
    fifthLap: 62.79,
    sixthLap: 52.88,
    seventhLap: 53.10,
    eightLap: 54.12
};

console.log(lapRounds.eightLap);


// Logs properties of object in console, in a structured sentence.
const teachers = [
    {
        name: "Loek",
        profession: "teacher",
        brand: "Linux",
        hoursPerWeek: 40,
        salary: 2200
    },
    {
        name: "Daan",
        profession: "teacher",
        brand: "Arduino",
        hoursPerWeek: 20,
        salary: 2300
    },
    {   
        name: "Rimmert",
        profession: "teacher",
        brand: "Apple",
        hoursPerWeek: 20,
        salary: 2400
    }
]

teachers.forEach(teacher => {
    console.log(`I have a ${teacher.profession} named ${teacher.name} and he likes to work on a/an ${teacher.brand} computer.`)
});

// Method to calculate how much the teacher earns per hour
let salaryPerHour = function(teacher) {
    console.log(`${teacher.name} works ${teacher.hoursPerWeek} hours per week and earns €${(teacher.salary / teacher.hoursPerWeek) / 4}.`)
}

// Calls the method 
teachers.forEach(teacher => {
    salaryPerHour(teacher);
});
