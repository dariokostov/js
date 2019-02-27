$(document).ready(function () {
    /*Create div with height and width of 400px and when the mouse pointer entered in the div, div will change his position*/

    $("<div>").appendTo("body").attr("id", "greenDiv").css({
        "width": "400px",
        "height": "400px",
        "background-color": "green",
        "position": "absolute"
    })

    $("#greenDiv").on("mouseover", function(){
        $(this).css({
            "left": "200px",
            "top": "200px"
        })
    })
});