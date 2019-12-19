$(document).ready(function() {

    function getCardio (data) {

        // let name = $("#cardio-name").val();
        // let distance = $("#cardio-distance").val();
        // let duration = $("#cardio-duration").val();
      

        $.ajax({
            method: "GET",
            url: "/api/cardio",
        }).then((data) => {
            console.log(data);
    
        })
    
    };
    getCardio();

    function getRes () {
        // let name = $("#resistance-name").val();
        // let sets = $("#resistance-sets").val();
        // let reps = $("#resistance-reps").val();
        // let duration = $("#resistance-duration").val();
        $.ajax({
            method: "GET",
            url: "/api/resistance",
        }).then((data) => {
            console.log(data);
        })

    };
    getRes();
});