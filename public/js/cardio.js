$(document).ready(function() {

    function makeCardioWorkout () {

        let name = $("#cardio-name").val();
        let distance = $("#cardio-distance").val();
        let duration = $("#cardio-duration").val();
        let Cardio = {
            name: name,
            distance: distance,
            duration: duration,
        };

        $.ajax({
            method: "POST",
            url: "/api/cardio",
            data: Cardio
        }).catch((err) => {
            if (err) throw err;
        });
    
    };

    $(".submitCardio").on("click", function() {
        makeCardioWorkout();
    });
    
    $(".myWorkouts").on("click", function() {
        window.location.href = "./workouts.html";
    });

    $(".homeBtn").on("click", function() {
        window.location.href = "./home.html";
    });
})