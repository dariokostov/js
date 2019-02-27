var money = prompt("How much money you have?");
if (money === "" || money === null || money <= 0){
    alert("Please enter money");
} else if (money <= 100){
    alert("you can buy a beer");
} else if (money <= 500){
    alert ("you can buy a whiskey");
} else {
    alert ("you are rich");
}