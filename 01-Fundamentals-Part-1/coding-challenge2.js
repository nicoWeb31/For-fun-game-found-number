// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

console.log('coding challenge 2')

const markW = 50;
const markM = 1.69;

const jhonW = 92;
const jhonM = 1.95;

const bimMLark = markW / (markM ** 2);
console.log("bimMLark", bimMLark)
const bimJhon = jhonW / jhonM ** 2;
console.log("bimJhon", bimJhon)


const markHigherBMI = markM > jhonM
console.log("markHigherBMI mark is more heither than jhon ?", markHigherBMI)

console.log(typeof bimMLark)
if(bimMLark < bimJhon){
    console.log(`John's BMI is higher than Mark's! with ${bimJhon}`)
}else{
    console.log(`Mark's BMI is higher than John's! with ${bimMLark}`)
}