/*NUMBERS OF ONE LETTER IN A STRING

Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
Sample arguments : 'w3resource.com', 'o' 
Expected output : 2*/

function funCount(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count = count + 1
        }
    }
    return count
}
console.log(funCount("w3resource.com", "o"))