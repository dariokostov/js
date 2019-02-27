debugger;
function test() {
    var result = "";
    for (i = 1; i < 21; i++) {
        if (i % 2 !== 0) {
            var result = result + (i + " ");
        }
        else {
            var result = result + (i + "\n");
        }
    }
    return result;
}

console.log(test());