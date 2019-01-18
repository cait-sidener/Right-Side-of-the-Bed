var key ="Ak1mPSqAHW1l1MRNPcHfPyf5W6Awjxu4iGI-YqF_d7yb0LE5Ik5opIazkb8glEAQ";
function geoLocation(origin, destination){
        var startRes = encodeURI(origin);
        var endRes = encodeURI(destination)
    var queryURL = "http://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=" + startRes + "&wp.1=" + endRes + "&optimize=timewithTraffic&key=" + key;  

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        var totalSeconds = response.resourceSets[0].resources[0].travelDurationTraffic;
        console.log(totalSeconds);
        var hours = Math.floor(totalSeconds / 3600);
            console.log(hours);
        var minutes = Math.floor(totalSeconds / 60);
        console.log(minutes);
        var seconds = totalSeconds % 60;
        console.log(seconds);
        $("#display").text("Total Commute time " + hours+ ":"+ minutes+ ":"+ seconds);
    });
}
    //gets origin and destination input from user
    $("#submit").on("click", function(event){
        event.preventDefault();
    
        var origin = $("#startPoint").val().trim();
        var destination = $("#endPoint").val().trim();
        console.log("Origin: ", origin, "Destination: ", destination);
        geoLocation(origin, destination);
    });
    