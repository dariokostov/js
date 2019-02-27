/*Write a JavaScript function which will take an array of numbers stored and find
the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4*/

var  array = [1,2,3,4,5]
var arrayOutput = []
var editArray = array.sort(function(a, b) {return a - b})

function remove() {
    editArray.shift();
    editArray.pop();
    var min = Math.min(...editArray);
    var max = Math.max(...editArray);
    arrayOutput.push(min, max);
    return arrayOutput
}
console.log(remove())