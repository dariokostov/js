$(document).ready(function () {
    /*Create three div elements with different style and one button.
    In the beginning button should have value “Hide Divs” and when is clicked the divs will disappear with different speed and the value on the button will be changed to “Show Divs”, if it’s clicked again the divs will appear.*/

    let btn = $("<button>").appendTo("body").attr("type", "submit").text("Hide Divs").css({
        "width": "200px",
        "height": "80px",
        "margin": "10px"
    })

    $("<div>").appendTo("body").attr("id", "one").css({
        "background-color": "red",
        "width": "200px",
        "height": "80px",
        "margin": "10px"
    })
    $("<div>").appendTo("body").attr("id", "two").css({
        "background-color": "green",
        "width": "200px",
        "height": "80px",
        "margin": "10px"
    })
    $("<div>").appendTo("body").attr("id", "three").css({
        "background-color": "blue",
        "width": "200px",
        "height": "80px",
        "margin": "10px"
    })

    btn.on("click", function(){
        $("#one").fadeOut(1500);
        $("#two").fadeOut(1000);
        $("#three").fadeOut(500)
        $(this).text("Show Divs").on("click", function(){
            $("#one").fadeIn(500);
            $("#two").fadeIn(1000);
            $("#three").fadeIn(1500);
            $(this).text("The end :D")
        })
    })
});