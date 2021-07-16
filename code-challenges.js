// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

const boilingPoint = (temp) => {
  if (temp < 212 ){
    return `${temp} is below boiling point`
  } else if(temp > 212){
    return `${temp} is above boiling point`
  } else if(temp === 212){ 
    return `${temp} is at boiling point`

  }
}

  console.log(boilingPoint(temp1));
  console.log(boilingPoint(temp2));
  console.log(boilingPoint(temp3));




// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

let numbers = [3, 7, 0, 36, -9, 8, -7, 22, 9, 13];
numbers.sort((a, b) => a - b);
console.log(numbers);



// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

const str = `bravo, charlie` 
  var newStr = str.split(``);



console.log(newStr.reverse().join(``))

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

const doMath = (num1, num2) => {
  return num1 - num2
}

console.log(doMath(42 ,27))
console.log(doMath(19, 7))



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

const subtractor = (num1, num2) => {
  if(typeof num1 !== "number") {
    return("Your input is not a number")
  } else if(typeof num2 !== "number") {
    return("Your input is not a number");
  }
    else if(num1 >= num2) {
    return num1 - num2
  } else if(num1 < num2) {
    return num2 - num1
  }
}
console.log(subtractor(numberExampleRefactor1, numberExampleRefactor2));
console.log(subtractor(numberExampleRefactor3, numberExampleRefactor4));
