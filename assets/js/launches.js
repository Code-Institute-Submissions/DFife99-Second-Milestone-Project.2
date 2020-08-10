$(document).ready(function() {
    $.getJSON('https://api.spacexdata.com/v3/launches', function(data) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element);
            let unixDate = new Date(element.launch_date_unix * 1000);
            let now = new Date().getTime();
            if (unixDate > now) {

                // Find the distance between now and the count down date
                var distance = unixDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                var countdown = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";
                $('#launches').prepend('<p><h3> Mission Name : ' + element.mission_name + '</h3><h4> Rocket Name : ' + element.rocket.rocket_id + '<br> Payload ID : ' + element.rocket.second_stage.payloads[0].payload_id + '<br> Payload Type : ' + element.rocket.second_stage.payloads[0].payload_type + '<br> Nationality : ' + element.rocket.second_stage.payloads[0].nationality + '<br>Launch Date : ' + countdown + '</h4></p>')

            } else {
                $('#launches').prepend('<p><h3> Mission Name : ' + element.mission_name + '</h3><h4> Rocket Name : ' + element.rocket.rocket_id + '<br> Payload ID : ' + element.rocket.second_stage.payloads[0].payload_id + '<br> Payload Type : ' + element.rocket.second_stage.payloads[0].payload_type + '<br> Nationality : ' + element.rocket.second_stage.payloads[0].nationality + '<br>Launch Date : ' + unixDate + '</h4></p>')
            }
        }
    });
})