/*CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)*/

var btn = document.getElementById("enter");
btn.addEventListener("click", myFun);

function myFun() {
    cols = document.getElementById("rows").value;
    rows = document.getElementById("cols").value;
    if (cols == "" || rows == "") {
        alert("Please enter number");
    } else {
        let createTable = document.createElement('table');
        createTable.setAttribute("border", "3px");
        for (var i = 1; i <= cols; i++) {
            let createRow = document.createElement("tr");
            for (var j = 1; j <= rows; j++) {
                let createCol = document.createElement("td");
                createCol.appendChild(document.createTextNode(`row ${i} - col ${j}`));
                createRow.appendChild(createCol);
            }
            createTable.appendChild(createRow);
        }
        document.body.appendChild(createTable);
    }
}