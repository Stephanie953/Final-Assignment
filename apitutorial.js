$(document).ready(function() {
    $("#submitButton").on("click", function() {
        let artist = $("#artists").val();
        let songs = [];
        let albums = [];
        let songPrices = [];

        $.ajax({
            url: "https://itunes.apple.com/search?entity=song&limit=5&term=" + artist
        }).done(response => {
            let res = JSON.parse(response);

            let resultsarray = res.results;

            for (let i = 0; i < resultsarray.length; i++) {
                songs.push(res.results[i].trackName);
                albums.push(res.results[i].collectionName);
                songPrices.push(res.results[i].trackPrice);
            }

            console.log(songs);
            console.log(albums);
            console.log(songPrices);
        });

    });
});





            // let table = "<canvas id='myChart'></canvas>";
            // $("body").append(table);

            // if (chart) {
            //     chart.destroy();
            // }

        //     var ctx = document.getElementById("myChart").getContext("2d");

        //     var chart = new Chart(ctx, {
        //         // the type of chart
        //         type: 'line',

        //         //the data for the chart
        //         data: {
        //             labels: labels,
        //             datasets: [{
        //                 label: 'Historical BPI data',
        //                 data: data,
        //                 backgroundColor: "rgb(255,99,132)",
        //                 borderColor: "rgb(255, 99, 132)"
        //             }]
        //         },

        //         //configuration options go here
        //         options: {}

        //     });
