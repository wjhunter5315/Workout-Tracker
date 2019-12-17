$(document).ready(function() {
    let Resistance = {
        name: "",
        reps: "",
        sets: "",
        duration: "",
    };

    function makeResWorkout (resistance) {
        Resistance.name = $("#resistance-name").val();
        Resistance.sets = $("#resistance-sets").val();
        Resistance.reps = $("#resistance-reps").val();
        Resistance.duration = $("#resistance-duration").val();

        $.ajax({
            method: "POST",
            url: "/api/resistance",
            data: Resistance
        }).catch((err) => {
            if (err) throw err;
        });
    
    };

    $(".submitRes").on("click", function() {
        makeResWorkout();
    });
    
})