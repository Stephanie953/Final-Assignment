$(document).ready(function() {

    //navbar button javascript
    $("#navBarButton").on("click", function() {
        var navBarFlow = document.getElementById("navbarNav");
        if (navBarFlow.style.display === "none") {
            navBarFlow.style.display = "flex";
            navBarFlow.style.justifyContent = "end-right";
        } else {
            navBarFlow.style.display = "none";
        }
    });

    //API 1 javascript code 
    $("#submitButton").on("click", function() {
        let artist = $("#artists").val();
        let noOfSongs = $("#noOfSongs").val();
        let songs = [];
        let albums = [];
        let songPrices = [];
        let soundPreviews = [];

        $.ajax({
            url: "https://itunes.apple.com/search?entity=song&country=us&limit=" + noOfSongs + "&term=" + artist
        }).done(response => {
            let res = JSON.parse(response);

            let resultsarray = res.results;
            for (let i = 0; i < resultsarray.length; i++) {
                songs.push(res.results[i].trackName);
                albums.push(res.results[i].collectionName);
                songPrices.push(res.results[i].trackPrice);
                soundPreviews.push(res.results[i].previewUrl);
            }

            let tableHeader = "<thead><tr><th scope='col'>#</th><th scope='col'>Song</th><th scope='col'>Album</th><th scope='col'>Price</th><th scope='col'>Preview</th></tr></thead>";

            let tableRow = [];

            for (let i = 0; i < resultsarray.length; i++) {
                tableRow.push("<tr><th scope='row'>" + (i+1) + "</th><td>" + songs[i] + "</td><td>" + albums[i] + "</td><td>$"+ songPrices[i] + "</td><td>" +
                "<audio controls><source src=" + soundPreviews[i] + "/></audio></td></tr>");
            }

            let table = tableHeader + "<tbody>" + tableRow + "</tbody>";
            $("table").empty();
            $("table").append(table);
        });
    });

    //API 2 javascript code
    $("#albumButton").on("click", function() {
        let album = $("#album").val();
        let albumResult;

        $.ajax({
            url: "https://itunes.apple.com/search?entity=album&limit=1&term=" + album
        }).done(response => {
            let res = JSON.parse(response);

            console.log(res);

            let resultsarray = res.results;
            for (let i = 0; i < resultsarray.length; i++) {
                albumResult = res.results[i].artworkUrl100.replace("100x100bb.jpg", "300x300bb.jpg");
            }

            let albumPhoto = "<img src='" + albumResult +"'>";

            $("#imageAlbum").empty();
            $("#imageAlbum").append(albumPhoto);
        });
    });
});
