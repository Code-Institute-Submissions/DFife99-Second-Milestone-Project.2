$(document).on('click', '#launched-header', function() {
    $('#upcoming-content').css('display', 'none');
    $('#launched-content').css('display', 'block');
    $('#upcoming-header').removeClass('active');
    $('#launched-header').addClass('active');
})

$(document).on('click', '#upcoming-header', function() {
    $('#launched-content').css('display', 'none');
    $('#upcoming-content').css('display', 'block');
    $('#launched-header').removeClass('active');
    $('#upcoming-header').addClass('active');
})


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
                //$('#spacex-api-' + index).prepend('<p><h3> Mission Name : ' + element.mission_name + '</h3><h4> Rocket Name : ' + element.rocket.rocket_id + '<br> Payload ID : ' + element.rocket.second_stage.payloads[0].payload_id + '<br> Payload Type : ' + element.rocket.second_stage.payloads[0].payload_type + '<br> Nationality : ' + element.rocket.second_stage.payloads[0].nationality + '<br>Launches In : ' + countdown + '</h4></p>')
                $('#upcoming-content').append('<div id="spacex-api-' + index + '"></div><p><h3> Mission Name : ' + element.mission_name + '</h3><h4> Rocket Name : ' + element.rocket.rocket_id + '<br> Payload ID : ' + element.rocket.second_stage.payloads[0].payload_id + '<br> Payload Type : ' + element.rocket.second_stage.payloads[0].payload_type + '<br> Nationality : ' + element.rocket.second_stage.payloads[0].nationality + '<br>Launches In : ' + countdown + '</h4></p>')
            } else {
                //$('#spacex-api-' + index).prepend('<p><h3> Mission Name : ' + element.mission_name + '</h3><h4> Rocket Name : ' + element.rocket.rocket_id + '<br> Payload ID : ' + element.rocket.second_stage.payloads[0].payload_id + '<br> Payload Type : ' + element.rocket.second_stage.payloads[0].payload_type + '<br> Nationality : ' + element.rocket.second_stage.payloads[0].nationality + '<br>Launch Date : ' + unixDate + '<br><br> Details : ' + element.details + '</h4></p>')
                $('#launched-content').prepend('<div id="spacex-api-' + index + '"></div><p><h3> Mission Name : ' + element.mission_name + '</h3><h4> Rocket Name : ' + element.rocket.rocket_id + '<br> Payload ID : ' + element.rocket.second_stage.payloads[0].payload_id + '<br> Payload Type : ' + element.rocket.second_stage.payloads[0].payload_type + '<br> Nationality : ' + element.rocket.second_stage.payloads[0].nationality + '<br>Launch Date : ' + unixDate + '<br><br> Details : ' + element.details + '</h4></p>')
            }
            if (element.launch_success === null) {
                $('#spacex-api-' + index).addClass('spacex-api-contain building').html('<img src="assets/images/building-' + Math.floor((Math.random() * 3) + 1) + '.jpg" alt="Building" class="spacex-api-image">')
            } else {
                if (element.launch_success === false) {
                    $('#spacex-api-' + index).addClass('spacex-api-contain failed').html('<img src="assets/images/failure.jpg" alt="Failed" class="spacex-api-image">')
                        //$('#launches').prepend('<div class="spacex-api-contain"><img src="assets/images/failure.jpg" alt="Failed" class="spacex-api-image"><div class="failed" id="spacex-api-' + index + '"></div></div')
                } else {
                    $('#spacex-api-' + index).addClass('spacex-api-contain starlink').html('<img src="assets/images/launched-' + Math.floor((Math.random() * 5) + 1) + '.jpg" alt="Launched" class="spacex-api-image">')
                        //$('#launches').prepend('<div class="spacex-api-contain"><img src="assets/images/starlink.jpg" alt="Starlink" class="spacex-api-image"><div class="starlink" id="spacex-api-' + index + '"></div></div>')
                }
            }
        }
    });
})