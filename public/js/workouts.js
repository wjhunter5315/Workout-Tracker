$(document).ready(function() {

    function getCardio () {

        $.ajax({
            method: "GET",
            url: "/api/cardio",
        }).then((cardioData) => {
            console.log(cardioData);
            function showCardio() {
                let workoutTemp, item, cardName, distance, duration, i; 
                workoutTemp = document.getElementsByTagName("template")[0];
                item = workoutTemp.content.querySelector("div");
                for (i=0; i<cardioData.length; i++) {
                    cardName = document.importNode(item, true);
                    cardName.textContent += cardioData[i].name;
                    document.body.appendChild(cardName);
                    distance = document.importNode(item, true);
                    distance.textContent += cardioData[i].distance;
                    document.body.appendChild(distance);
                    duration = document.importNode(item, true);
                    duration.textContent += cardioData[i].duration;
                    document.body.appendChild(duration);
                    // a = document.getElementById("workoutTemplate").innerHTML = cardioData[i].name;
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
                let workoutTemp, item, resName, sets, reps, duration, i; 
                workoutTemp = document.getElementsByTagName("template")[0];
                item = workoutTemp.content.querySelector("div");
                for (i=0; i<resData.length; i++) {
                    resName = document.importNode(item, true);
                    resName.textContent += resData[i].name;
                    document.body.appendChild(resName);
                    sets = document.importNode(item, true);
                    sets.textContent += resData[i].sets;
                    document.body.appendChild(sets);
                    reps = document.importNode(item, true);
                    reps.textContent += resData[i].reps;
                    document.body.appendChild(reps);
                    duration = document.importNode(item, true);
                    duration.textContent += resData[i].duration;
                    document.body.appendChild(duration);
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