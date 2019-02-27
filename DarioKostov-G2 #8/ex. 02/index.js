$(document).ready(function () {
    /*Create two input fields attach a function to the focus event. When the focus event occurs (display a message regarding the text field) and on focus out hide the text*/

    let text = $("<input>").appendTo("body").attr("type", "text");
    let pass = $("<input>").appendTo("body").attr("type", "password");
    let pText = text.attr("placeholder", "enter email");
    let PPass = pass.attr("placeholder", "enter password");

    $(text).on("blur",function(){
        pText.hide();
    });
});