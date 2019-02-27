/*HOMEWORK PART 1
Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed*/

var change = document.getElementsByTagName("p");
for (var i = 0; i < change.length; i++) {
    change[i].innerText = "SMENET PARAGRAF";
}

var changeH = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
for (var i = 0; i < changeH.length; i++) {
    changeH[i].innerText = "SMENET HEADER";
}