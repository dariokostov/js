/*REGISTER USER
Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button 
On click of the button call a function that will get all the inputs' values and use the values as parameters for a new function which will add them to string 
Finaly print the values 
Time to accomplish: 15 minutes*/

var button = document.getElementById("submit")
button.addEventListener("click", valueFun);

function valueFun() {
    let a = document.getElementById("firstName").value;
    let b = document.getElementById("lastName").value;
    let c = document.getElementById("email").value;
    let d = document.getElementById("password").value;

    function stringFun(para1, para2, para3, para4) {
        return `first name: ${para1}<br> last name: ${para2}<br> email: ${para3}<br> pass: ${para4}`;
    }
    document.write(stringFun(a,b,c,d))
}