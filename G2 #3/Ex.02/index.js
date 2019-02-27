function number() {
    var numbers = "";
    var integer = prompt("Enter your number");
    var string = integer.toString();
    for (i = 0; i < string.length; i++) {
        numbers = (numbers + " " + string[i] + " ");
    }
    return numbers;
}

alert(number());