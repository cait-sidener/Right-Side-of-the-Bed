$(document).ready(function(){
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.nytimes.com/svc/news/v3?api-key=5G5trsY71XEGyCzsg97O2rky6AnWpUOt:nGOZyANhhJ8XyLDv";
  

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(queryURL);
      console.log(response);
})
})