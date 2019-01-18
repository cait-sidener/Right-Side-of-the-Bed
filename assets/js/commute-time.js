// function that uses Location API to turn address into longtitude and latitude coordinates
var startPoint="127 Topping Ave, Kansas City MO 64123";
var startRes = encodeURI(startPoint);
console.log(startRes);
var endPoint = "3902 Main St, Kansas City MO 64111";
var endRes = encodeURI(endPoint);
console.log(endRes);
var key ="Ak1mPSqAHW1l1MRNPcHfPyf5W6Awjxu4iGI-YqF_d7yb0LE5Ik5opIazkb8glEAQ";

var location = function(geoLocation){
    var queryURL = "http://dev.virtualearth.net/REST/v1/Locations?q=" + startRes + "&key=" + key;
    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
    geoLocation();
};