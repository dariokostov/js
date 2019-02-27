/*Write a JavaScript function to convert an amount to bills and coins.
Available bills and coins: 1000, 500, 200, 100, 50, 10, 5, 3, 2, 1. 
Expected Output for 585:
1 bill of 500,
1 bill of 50,
3 bills of 10,
1 coin of 5.*/

var bills = [1000, 500, 200, 100, 50, 10];
var coins = [5, 3, 2, 1]
function convert(amount) {
    for (var i = 0; i < bills.length; i++) {
        if (amount >= bills[i]) {
            var result = amount / bills[i];
            amount %= bills[i];
            var resultFloor = Math.floor(result)
            if (resultFloor >= 2) {
                console.log(`${resultFloor} Bills From ${bills[i]}`)
            } else {
                console.log(`${resultFloor} Bill From ${bills[i]}`)
            }
        }
    }
    for (var i = 0; i < coins.length; i++) {
        if (amount >= coins[i]) {
            var result = amount / coins[i];
            amount %= coins[i];
            var resultFloor = Math.floor(result)
            if (resultFloor >= 2) {
                console.log(`${resultFloor} Coins From ${coins[i]}`)
            } else {
                console.log(`${resultFloor} Coin From ${coins[i]}`)
            }
        }
    }
    return " "
}
console.log(convert(585))