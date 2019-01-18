$("#headline-news").on("click", function () {

    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5G5trsY71XEGyCzsg97O2rky6AnWpUOt";


    $.ajax({
            url: queryURL,
            method: "GET"
        })
        // After data comes back from the request
        .then(function (response) {
            console.log(response);

            //Creating a div to hold the movie
            var newsDiv = $("<div class='news'>");

            // Storing headline abstract data
            var headline = response.results.abstract;

            // Creating an element to have headline abstract display
            var abstract = $("<h3>").text(headline);

            // Displaying the abstract
            newsDiv.append(abstract);

            // Storing the source
            var source = response.results.url;

            // Creating an element to have headline url displayed
            var newsSource = $("<p>").text(source);

            // Displaying the URL
            newsDiv.append(newsSource);

            // Putting the entire headline above the previous headlines
            $("#headline-view").prepend(newsDiv);
        })
})