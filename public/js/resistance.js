$(document).ready(function() {

    function makeResWorkout () {
        let name = $("#resistance-name").val();
        let sets = $("#resistance-sets").val();
        let reps = $("#resistance-reps").val();
        let duration = $("#resistance-duration").val();
        let Resistance = {
            name: name,
            sets: sets,
            reps: reps,
            duration: duration,
        };

        $.ajax({
            method: "POST",
            url: "/resistance",
            data: Resistance
        }).catch((err) => {
            if (err) throw err;
        });
    
    };

    $(".submitRes").on("click", function() {
        makeResWorkout();
    });

    $(".myWorkouts").on("click", function() {
        window.location.href = "./workouts.html";
    });

    $(".homeBtn").on("click", function() {
        window.location.href = "./home.html";
    });
});
