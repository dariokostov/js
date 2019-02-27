$(document).ready(function () {
    /*Find the position of the mouse pointer relative to the left and top edges of the document*/
    let div = $("<div>").appendTo("body")
    $(window).on("mousemove", function (event) {
        div.text(`x = ${event.pageX} and y = ${event.pageY}`)
    })
});