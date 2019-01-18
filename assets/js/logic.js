$(document).ready(function(){
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5G5trsY71XEGyCzsg97O2rky6AnWpUOt";
  

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(response);

      //Creating a div to hold the movie

})
})