$(document).ready(function () {
    $('.parallax').parallax();

    $("#name-animation").click(function () {
        console.log("clicked");
        $("#name-animation").addClass("shake");
        $("#name-animation").css("text-shadow", "0 0 30px white");
        setTimeout(function () {
            $("#name-animation").removeClass("shake");
            $("#name-animation").css("text-shadow", "");
        }, 500);
    });
});



