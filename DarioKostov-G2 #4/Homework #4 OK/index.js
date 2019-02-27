/*Write a JavaScript function to truncates a string if it is longer than the specified number of characters. 
Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. Test Data :
console.log(text_truncate('We are doing JS string exercises.')) 
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises." 
"We are doing JS ..." 
"We are doing !!"*/

function truncates(a, b = +Infinity, c = "...") {
    if (a.length > b) {
        return a.substring(0, b - c.length) + c;
    } else {
        return a
    }
}

console.log(truncates('We are doing JS string exercises.'))
console.log(truncates('We are doing JS string exercises.', 19))
console.log(truncates('We are doing JS string exercises.', 15, '!!'))