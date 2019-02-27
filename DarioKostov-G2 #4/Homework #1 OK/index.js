/*THE LIFETIME SUPPLY CALCULATOR

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age). outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

var maxAge = 81
function calculateSupply(age, amountPerDay) {
    var moreDays = (maxAge - age) * 365
    var moreSnack = amountPerDay * moreDays
    var fixed = moreSnack.toFixed()

    return `"You will need ${fixed} to last you until the ripe old age of ${maxAge}"`
}

console.log(calculateSupply(24, 5.5))
console.log(calculateSupply(55, 50.3))
console.log(calculateSupply(25, 1.87))