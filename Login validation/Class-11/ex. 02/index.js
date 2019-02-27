$(document).ready(function () {
    /*
    Number checker
Part 1
Write a function that will give stats about an integer number.

function getNumberStats(number){
    // your code here
}
The function should return an object with the stats as properties. The stats required are:

How many digits the number has (numDigits property)
Is the number odd or even (isEven property)
Is the number positive (isPositive property)
    
Part 2
Write user interface for the number checker.
It should include an entry field for the number as well as a button to trigger the calculation. After the calculation, and appropriate response should be shown on the page.

I.e. if the user enters the number 25, the response should be

The number 25 is a 2 digit number, it's odd and it's a positive number.*/



    function getNumberStats(input) {
        let one = input.toString().length;
        if (input < 0) {
            document.write(`Number of digits is: ${one-1}. `);
        } else {
            document.write(`Number of digits is: ${one}. `);
        }
        if (input % 2 === 0) {
            document.write(`Number ${input} is even. `)
        } else {
            document.write(`Number ${input} is odd. `)
        };
        if (input > 0) {
            document.write(`Number ${input} is positive. `)
        } else {
            document.write(`Number ${input} is negative. `)
        }
    }
    getNumberStats(prompt("enter number"))
})