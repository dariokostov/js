/*Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null,100,]
Expected result : [15, -22, 47, 100]*/


var simpleArray = [NaN, 0, 15, false, -22, "", undefined, 47, null, 100]
function remove(simpleArray) {
    return simpleArray.filter(Boolean);
}

console.log(remove(simpleArray))