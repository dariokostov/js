function maxOfThree(x, y, z) {
    if (x > z && x > y) return (x);
    else if (z > x && z > y) return (z);
    else return (y);
}

alert(maxOfThree(9, 30, 40));
alert(maxOfThree(20, 44, 1));
alert(maxOfThree(12, 309, 450));