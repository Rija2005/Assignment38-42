//ASSIGNMENT
//CHAP38-42
//QUESTION NO1
function power(a, b) {
    if (b === 0) {
        return 1; // Any number to the power of 0 is 1
    }
    
    if (b < 0) {
        return 1 / power(a, -b); 
    }
    
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    
    return result;
}

// Example usage:
console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(2, -3)); // 0.125


//QUESTION NO2
function isLeapYear(year) {
    // Check if year is divisible by 400, or divisible by 4 but not by 100
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// Prompt the user for input
const yearInput = parseInt(prompt("Enter a year:"), 10);

if (isNaN(yearInput)) {
    console.log("Invalid input. Please enter a valid year.");
} else {
   
    if (isLeapYear(yearInput)) {
        console.log(`${yearInput} is a leap year.`);
    } else {
        console.log(`${yearInput} is not a leap year.`);
    }
}

//QUESTION NO3
// Function to calculate the semi-perimeter S
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

// Function to calculate the area of the triangle
function calculateArea(a, b, c) {
    // Calculate the semi-perimeter
    const S = calculateSemiPerimeter(a, b, c);

    // Use Heron's formula to calculate the area
    const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

    return area;
}

let sideA, sideB, sideC;

// Function to prompt user for side lengths with validation
function getTriangleSides() {
    let valid = false;

    do {
        sideA = parseFloat(prompt("Enter the length of side a:"));
        sideB = parseFloat(prompt("Enter the length of side b:"));
        sideC = parseFloat(prompt("Enter the length of side c:"));

        // Check if inputs are valid numbers and form a valid triangle
        if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC) && sideA > 0 && sideB > 0 && sideC > 0) {
            // Check if the lengths form a valid triangle
            if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
                valid = true;
            } else {
                alert("The provided lengths do not form a valid triangle. Please try again.");
            }
        } else {
            alert("Invalid input. Please enter positive numbers for all sides.");
        }
    } while (!valid);
}

// Prompt the user for valid triangle sides
getTriangleSides();

// Calculate the area and display result
const area = calculateArea(sideA, sideB, sideC);
console.log(`The area of the triangle is ${area.toFixed(2)} square units.`);



//QUESTION NO5

function removeVowels(sentence) {

    const vowels = 'aeiouAEIOU';
    let result = '';
    let i = 0;

    
    while (i < sentence.length) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i]; // Append non-vowel characters to result
        }
        i++;
    }

    return result;
}


const sentence = "Pleases read this application and give me gratuity";
const result = removeVowels(sentence);
console.log(result); 


//QUESTIONNO7
function countVowelPairs(text) {
  
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let i = 0;

    while (i < text.length - 1) {
       
        switch (true) {
            case (vowels.indexOf(text[i]) !== -1 && vowels.indexOf(text[i + 1]) !== -1):
                count++;
                i++; // Move to the next character after a found pair
                break;
            default:
                break;
        }
        i++;
    }

    return count;
}

// Example usage:
const lineOfText = "Pleases read this application and give me gratuity";
const vowelPairCount = countVowelPairs(lineOfText);
console.log(vowelPairCount); // Output: 3 (ea, ea, ui)

//QUESTION NO8

function convertToMeters(km) {
    return km * 1000;
}


function convertToFeet(km) {
    return km * 3280.84;
}


function convertToInches(km) {
    return km * 39370.1;
}


 
function convertToCentimeters(km) {
    return km * 100000;
}

// Example usage:
const distanceKm = 10; // Example distance

console.log(`Distance in meters: ${convertToMeters(distanceKm)} meters`);
console.log(`Distance in feet: ${convertToFeet(distanceKm)} feet`);
console.log(`Distance in inches: ${convertToInches(distanceKm)} inches`);
console.log(`Distance in centimeters: ${convertToCentimeters(distanceKm)} centimeters`);


//QUESTION NO9

function calculateOvertimePay(hoursWorked) {
    let overtimePay = 0;
    const overtimeRate = 12; // Rs. 12 per hour
    const regularHours = 40;

    // Ensure that hoursWorked is non-negative
    do {
        if (hoursWorked > regularHours) {
            overtimePay = (hoursWorked - regularHours) * overtimeRate;
        }
    } while (hoursWorked < 0); // Loop until valid input is given

    return overtimePay;
}

// Example usage:
const hoursWorked = 45; // Example number of hours worked
console.log(`Overtime pay: Rs. ${calculateOvertimePay(hoursWorked)}`);


//QUESTION NO10

function calculateCurrencyNotes(amount) {
    let remainingAmount = amount * 100; // Convert amount to actual currency value
    let notes = {
        ten: 0,
        fifty: 0,
        hundred: 0
    };

    
    notes.hundred = Math.floor(remainingAmount / 100);
    remainingAmount %= 100;

    
    notes.fifty = Math.floor(remainingAmount / 50);
    remainingAmount %= 50;

    notes.ten = Math.floor(remainingAmount / 10);

    
    console.log(`Number of 100 Rs notes: ${notes.hundred}`);
    console.log(`Number of 50 Rs notes: ${notes.fifty}`);
    console.log(`Number of 10 Rs notes: ${notes.ten}`);
}


const withdrawalAmount = 12; 
calculateCurrencyNotes(withdrawalAmount);
