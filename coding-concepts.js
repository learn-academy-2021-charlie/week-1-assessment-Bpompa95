// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.length)

// a) Your answer:11
// b) Verify and explain: i got the answer wrong because i was thinking of the word this way c h a r l i e 2 0 2 1 but i looked at the syllabus again 
            //   1,2,3,4,5,6,7,8,9,10,11 and the reason why i got it wrong because you always need to add one more.

// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer:L
// b) Verify and explain: i got the answer correct because i was thinking of the index always starts with 0. But you you are not looking for the index so instead of starting with 0 you start with 1 on the console.log it gives you the number 3 and 3 is L because it is like this 
// H, e, l
// 1, 2, 3

// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain: i got the answer correct because you are looking for a language and it gives the index number which is 1 because index always starts with 0 so i got the answer ruby.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:SATURDAY, SUNDAY
// b) Verify and explain: i got this answer wrong because i thought toUpperCase will make the words inside the brackets will make it go all capitals but inside the parameter for the console.log aka toUpperCase is not a function.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:number
// b) Verify and explain: i got number becuase i know .length is always at the end but since you are using typeof you are going to the beginning. But, this time you're not looking for the index you are looking variable.
