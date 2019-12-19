$(document).ready(function() {

    function getCardio () {

        $.ajax({
            method: "GET",
            url: "/api/cardio",
        }).then((cardioData) => {
            console.log(cardioData);
            function showCardio() {
                let workoutTemp, item, a, i; 
                workoutTemp = document.getElementsByTagName("template")[0];
                item = workoutTemp.content.querySelector("div");
                for (i=0; i<cardioData.length; i++) {
                    a = document.importNode(item, true);
                    a.textContent += cardioData[i].name;
                    document.body.prepend(a);
                }
            }
            showCardio();
            for(let i=0; i<cardioData.length; i++) {
                // console.log(cardioData.name);
                console.log(cardioData[i].name);
            }
        })
    
    };
    getCardio();

    function getRes () {
 
        $.ajax({
            method: "GET",
            url: "/api/resistance",
        }).then((resData) => {
            console.log(resData);
            function showResistance() {
                let workoutTemp, item, a, i; 
                workoutTemp = document.getElementsByTagName("template")[0];
                item = workoutTemp.content.querySelector("div");
                for (i=0; i<resData.length; i++) {
                    a = document.importNode(item, true);
                    a.textContent += resData[i].name;
                    document.body.appendChild(a);
                }
            }
            showResistance();
            // for(let i=0; i<resData.length; i++) {
            //     console.log(resData[i].name);
            // }       
        });

    };
    getRes();

    $(".homeBtn").on("click", function() {
        window.location.href = "./home.html";
    });
});