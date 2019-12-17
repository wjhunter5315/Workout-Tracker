// $(document).ready(function() {
//     let Resistance = {
//         name: "",
//         reps: "",
//         sets: "",
//         duration: "",
//     };

//     function makeResWorkout (resistance) {
//         Resistance.name = $("#resistance-name").val();
//         Resistance.sets = $("#resistance-sets").val();
//         Resistance.reps = $("#resistance-reps").val();
//         Resistance.duration = $("#resistance-duration").val();

//         $.ajax({
//             method: "POST",
//             url: "/resistance",
//             data: Resistance
//         }).catch((err) => {
//             if (err) throw err;
//         });
    
//     };

//     $(".submitRes").on("click", function() {
//         makeResWorkout();
//     });
    
// })

$(".submitRes").on("click", function() {
    $.ajax({
        type: "POST",
        url: "/resistance",
        dataType: "json",
        data: {
            name: $("#resistance-name").val(),
            reps: $("#resistance-reps").val(),
            sets: $("#resistance-sets").val(),
            duration: $("#resistance-duration").val(),
        },
    })
        .catch((err) => {
        if (err) throw err;
    })
        .then(function(data) {
            console.log(data);
    });

    $(".myWorkouts").on("click", function() {
        window.location.href = "./workouts.html";
    });
    $(".homeBtn").on("click", function() {
        window.location.href = "./home.html";
    })
});