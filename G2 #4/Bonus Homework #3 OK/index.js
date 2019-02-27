/*Write a JavaScript function that takes one parameter and checks if the parameter is palindrome.
Palindrome is a word, phrase, or sequence that reads the same backwards as forwards.
 e.g. “madam” or “nurses run”. (For this strings the output should be true)
Also try this for numbers.
e.g. 1991 or 36363. (For this numbers the output should be true)*/

function palindrome(input) {
    var toString = input.toString()
    var splitString = toString.split("");
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i] === " "){
            splitString.splice(i, 1);
        }
    }
    var final1 = splitString.toString()
    var reverseSplit = splitString.reverse()
    var final2 = reverseSplit.toString()
    return final1 === final2
}

console.log(palindrome("madam"));
console.log(palindrome("nurses run"));
console.log(palindrome(1991));
console.log(palindrome(36363));