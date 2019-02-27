$(document).ready(function () {
    /*Animates a paragraph to fade to a specified opacity (complete the animation within 500 milliseconds).*/

    let p = $("<p>").appendTo("body").text("I am paragraph from jQuery, click here")
    p.on("click", function () {
        $(p).fadeOut(500);
    })
});