/*
THE AGE CALCULATOR

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the age based on those years.
outputs the result to the screen like so: "You are NN years old"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

var dt = new Date().getFullYear()
function calculateAge(birthYear, fullYear = dt){
    if(birthYear > new Date().getFullYear() || birthYear < 0){
        return 'enter proper year'
    } else {
    var year = fullYear - birthYear
    return `"You are ${year} years old"`
    }
}

console.log(calculateAge(1993))
console.log(calculateAge(1945))
console.log(calculateAge(1903))