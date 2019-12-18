$(document).ready(function() {

    function getCardio (data) {

        let name = $("#cardio-name").val();
        let distance = $("#cardio-distance").val();
        let duration = $("#cardio-duration").val();
        let Cardio = {
            name: name,
            distance: distance,
            duration: duration,
        };

        $.ajax({
            method: "GET",
            url: "/cardio",
            data: Cardio
        }).catch((err) => {
            if (err) throw err;
            console.log(Cardio);
            console.log(data);
        });
    
    };
    getCardio();

    function getRes () {
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
            method: "GET",
            url: "/resistance",
            data: Resistance
        }).catch((err) => {
            if (err) throw err;
        });
    
    };
    getRes();
});