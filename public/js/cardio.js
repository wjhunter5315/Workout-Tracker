$(document).ready(function() {


    function makeCardioWorkout (cardio) {
        let Cardio = {
            name: "",
            distance: "",
            duration: "",
        };
        Cardio.name = $("#cardio-name").val();
        Cardio.distance = $("#cardio-sets").val();
        Cardio.duration = $("#cardio-duration").val();

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
    
})