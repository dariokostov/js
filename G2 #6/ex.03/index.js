/*FIND WINDOW SIZE
Write a Javascript program to get the width and height of the window 
When you resize the window, the program should print the actual width and height 
Time to accomplish: 15 minutes*/


d = document.getElementById("height");
v = document.getElementById("width");
d.innerHTML = `Height: ${document.documentElement.clientHeight}`;
v.innerHTML = `Width: ${document.documentElement.clientWidth}`;

window.addEventListener("resize", function (){
  var a = window.innerHeight;
  var b = window.innerWidth;
  document.getElementById("height").innerHTML = `Height: ${a}`;
  document.getElementById("width").innerHTML = ` Width: ${b}`;
})