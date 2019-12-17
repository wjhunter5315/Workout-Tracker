$(document).ready(function() {
    let workoutType = $("#pickType").val();
    
    function loadRes() {
        window.location.href = "./resistance.html";
    };

    $("#resPick").on("click", function() {
        loadRes();
    });

    function loadCard() {
        window.location.href = "./cardio.html";
    };

    $("#cardPick").on("click", function() {
        loadCard();
    });


})