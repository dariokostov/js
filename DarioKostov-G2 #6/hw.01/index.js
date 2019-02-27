/*IMPROVE REGISTER USER EXERCISE
Under the inputs in the HTML create a table element with 4 columns for First Name, Last Name, Password and E-mail 
Change the register user exercise code. Instead of printing the values in console, try to create a new table row and fill it with that values
You should have a new table row for every new user you make*/

var button = document.getElementById("submit")
button.addEventListener("click", valueFun);

function valueFun() {
    let a = document.getElementById("firstName").value;
    let b = document.getElementById("lastName").value;
    let c = document.getElementById("email").value;
    let d = document.getElementById("password").value;

    let createTable = document.getElementById("table");
    let createRow = document.createElement("tr");
    let createColA = document.createElement("td");
    let createColB = document.createElement("td");
    let createColC = document.createElement("td");
    let createColD = document.createElement("td");
    createColA.appendChild(document.createTextNode(a));
    createColB.appendChild(document.createTextNode(b));
    createColC.appendChild(document.createTextNode(c));
    createColD.appendChild(document.createTextNode(d));
    createRow.appendChild(createColA);
    createRow.appendChild(createColB);
    createRow.appendChild(createColC);
    createRow.appendChild(createColD);
    createTable.appendChild(createRow);
    document.body.appendChild(createTable);
}