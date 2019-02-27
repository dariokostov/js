/*HOMEWORK PART 2
Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)*/

let numbers = [2, 4, 5, 4, 8, 9, 6];
let sum = 0;

function numbersSum() {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > -Infinity) {
            sum += numbers[i];
            document.write(`&#9900 ${numbers[i]} <br>`);
        }
    }
    return `Sum of numbers: ${sum}`;
}

document.write(numbersSum())