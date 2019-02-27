/*FARM INVENTORY

Write a function that takes two numbers: the numbers of cows and chickens on a farm, and print this numbers with the words
Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long.
Expected output for 7 and 11: 
007 Cows
011 Chickens*/

function farm2(cows, chickens) {
    if (cows < 1000 && chickens < 1000) {
        var n = ("000" + cows).slice(-3);
        var m = ("000" + chickens).slice(-3);
        return `${n} Cows \n${m} Chickens`;
    } else if (cows >= 1000 && chickens < 1000) {
        var m = ("000" + chickens).slice(-3);
        return `${cows} Cows \n${m} Chickens`;
    } else if (cows < 1000 && chickens >= 1000) {
        var n = ("000" + cows).slice(-3);
        return `${n} Cows \n${chickens} Chickens`;
    } else {
        return `${cows} Cows \n${chickens} Chickens`;
    }
}

console.log(farm2(2, 9))
console.log(farm2(2, 99))
console.log(farm2(2, 999))
console.log(farm2(22, 9))
console.log(farm2(22, 99))
console.log(farm2(22, 999))
console.log(farm2(222, 9))
console.log(farm2(222, 99))
console.log(farm2(222, 999))
console.log(farm2(1000, 890))
console.log(farm2(1000, 8900))
console.log(farm2(100, 890))
console.log(farm2(100, 8990))