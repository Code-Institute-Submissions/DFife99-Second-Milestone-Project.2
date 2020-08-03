var w = window.innerWidth; // found on a google search

function scroll() {
    $(window).bind('scroll', function() { //  Found scroll selector online 
        if ($(window).scrollTop() > 50) {
            $('.scroll').slideUp('slow');
        } else {
            $('.scroll').slideDown('slow');
        }
    });
}

if (w > 800) {
    scroll();
};

$(document).on('click', '#dropdown', function() {
    $('.small-device-menu').toggle('slow');
});


$(document).on('click', '.rocket-button', function() {
    $('.rocket-txt-hidden').toggle('slow');
    $(this).html() == "Show Less" ? $('.rocket-button').html('Learn More') : $('.rocket-button').html('Show Less');
});

$(document).on('click', '#spacesuit-button', function() {
    $('#spacesuit-txt-hidden').toggle('slow');
    $(this).html() == "Show Less" ? $(this).html('Learn More') : $(this).html('Show Less');
});

$(document).on('click', '#food-button', function() {
    $('#food-txt-hidden').toggle('slow');
    $(this).html() == "Show Less" ? $(this).html('Learn More') : $(this).html('Show Less');
});

$(document).on('click', '.carousel-1', function() {
    $('#rocket-2').css('display', 'none');
    $('#rocket-1').css('display', 'block');
});

$(document).on('click', '.carousel-2', function() {
    $('#rocket-1').css('display', 'none');
    $('#rocket-2').css('display', 'block');
});

$(document).on('click', '.planet-carousel-1', function() {
    $('#planet-1').css('display', 'block');
    $('#planet-2').css('display', 'none');
    $('#planet-3').css('display', 'none');
    $('#planet-4').css('display', 'none');
    $('#planet-5').css('display', 'none');
    $('#planet-6').css('display', 'none');
    $('#planet-7').css('display', 'none');
    $('#planet-8').css('display', 'none');
    // MOON SECTION
    $('#planet-1-moon').css('display', 'block');
    $('#planet-2-moon').css('display', 'none');
    $('#planet-3-moon').css('display', 'none');
    $('#planet-4-moon').css('display', 'none');
    $('#planet-5-moon').css('display', 'none');
    $('#planet-6-moon').css('display', 'none');
    $('#planet-7-moon').css('display', 'none');
    $('#planet-8-moon').css('display', 'none');
})

$(document).on('click', '.planet-carousel-2', function() {
    $('#planet-1').css('display', 'none');
    $('#planet-2').css('display', 'block');
    $('#planet-3').css('display', 'none');
    $('#planet-4').css('display', 'none');
    $('#planet-5').css('display', 'none');
    $('#planet-6').css('display', 'none');
    $('#planet-7').css('display', 'none');
    $('#planet-8').css('display', 'none');
    // MOON SECTION
    $('#planet-1-moon').css('display', 'none');
    $('#planet-2-moon').css('display', 'block');
    $('#planet-3-moon').css('display', 'none');
    $('#planet-4-moon').css('display', 'none');
    $('#planet-5-moon').css('display', 'none');
    $('#planet-6-moon').css('display', 'none');
    $('#planet-7-moon').css('display', 'none');
    $('#planet-8-moon').css('display', 'none');
})

$(document).on('click', '.planet-carousel-3', function() {
        $('#planet-1').css('display', 'none');
        $('#planet-2').css('display', 'none');
        $('#planet-3').css('display', 'block');
        $('#planet-4').css('display', 'none');
        $('#planet-5').css('display', 'none');
        $('#planet-6').css('display', 'none');
        $('#planet-7').css('display', 'none');
        $('#planet-8').css('display', 'none');
        // MOON SECTION
        $('#planet-1-moon').css('display', 'none');
        $('#planet-2-moon').css('display', 'none');
        $('#planet-3-moon').css('display', 'block');
        $('#planet-4-moon').css('display', 'none');
        $('#planet-5-moon').css('display', 'none');
        $('#planet-6-moon').css('display', 'none');
        $('#planet-7-moon').css('display', 'none');
        $('#planet-8-moon').css('display', 'none');
    })
    // MARS
$(document).on('click', '.planet-carousel-4', function() {
        $('#planet-1').css('display', 'none');
        $('#planet-2').css('display', 'none');
        $('#planet-3').css('display', 'none');
        $('#planet-4').css('display', 'block');
        $('#planet-5').css('display', 'none');
        $('#planet-6').css('display', 'none');
        $('#planet-7').css('display', 'none');
        $('#planet-8').css('display', 'none');
        // MOON SECTION
        $('#planet-1-moon').css('display', 'none');
        $('#planet-2-moon').css('display', 'none');
        $('#planet-3-moon').css('display', 'none');
        $('#planet-4-moon').css('display', 'block');
        $('#planet-4-moon-1').css('display', 'block');
        $('#planet-5-moon').css('display', 'none');
        $('#planet-6-moon').css('display', 'none');
        $('#planet-7-moon').css('display', 'none');
        $('#planet-8-moon').css('display', 'none');
    })
    // MARS MOONS
$(document).on('click', '.planet-4-moon-carousel-1', function() {
    $('#planet-4-moon-1').css('display', 'block');
    $('#planet-4-moon-2').css('display', 'none');
})

$(document).on('click', '.planet-4-moon-carousel-2', function() {
        $('#planet-4-moon-1').css('display', 'none');
        $('#planet-4-moon-2').css('display', 'block');
    })
    // JUPITER 
$(document).on('click', '.planet-carousel-5', function() {
        $('#planet-1').css('display', 'none');
        $('#planet-2').css('display', 'none');
        $('#planet-3').css('display', 'none');
        $('#planet-4').css('display', 'none');
        $('#planet-5').css('display', 'block');
        $('#planet-6').css('display', 'none');
        $('#planet-7').css('display', 'none');
        $('#planet-8').css('display', 'none');
        // MOON SECTION
        $('#planet-1-moon').css('display', 'none');
        $('#planet-2-moon').css('display', 'none');
        $('#planet-3-moon').css('display', 'none');
        $('#planet-4-moon').css('display', 'none');
        $('#planet-5-moon').css('display', 'block');
        $('#planet-5-moon-1').css('display', 'block');
        $('#planet-6-moon').css('display', 'none');
        $('#planet-7-moon').css('display', 'none');
        $('#planet-8-moon').css('display', 'none');
    })
    //JUPITERS MOONS
$(document).on('click', '.planet-5-moon-carousel-1', function() {
    $('#planet-5-moon-1').css('display', 'block');
    $('#planet-5-moon-2').css('display', 'none');
    $('#planet-5-moon-3').css('display', 'none');
    $('#planet-5-moon-4').css('display', 'none');
    $('#planet-5-moon-5').css('display', 'none');
    $('#planet-5-moon-6').css('display', 'none');
    $('#planet-5-moon-7').css('display', 'none');
    $('#planet-5-moon-8').css('display', 'none');
})

$(document).on('click', '.planet-5-moon-carousel-2', function() {
    $('#planet-5-moon-1').css('display', 'none');
    $('#planet-5-moon-2').css('display', 'block');
    $('#planet-5-moon-3').css('display', 'none');
    $('#planet-5-moon-4').css('display', 'none');
    $('#planet-5-moon-5').css('display', 'none');
    $('#planet-5-moon-6').css('display', 'none');
    $('#planet-5-moon-7').css('display', 'none');
    $('#planet-5-moon-8').css('display', 'none');
})

$(document).on('click', '.planet-5-moon-carousel-3', function() {
    $('#planet-5-moon-1').css('display', 'none');
    $('#planet-5-moon-2').css('display', 'none');
    $('#planet-5-moon-3').css('display', 'block');
    $('#planet-5-moon-4').css('display', 'none');
    $('#planet-5-moon-5').css('display', 'none');
    $('#planet-5-moon-6').css('display', 'none');
    $('#planet-5-moon-7').css('display', 'none');
    $('#planet-5-moon-8').css('display', 'none');
})

$(document).on('click', '.planet-5-moon-carousel-4', function() {
    $('#planet-5-moon-1').css('display', 'none');
    $('#planet-5-moon-2').css('display', 'none');
    $('#planet-5-moon-3').css('display', 'none');
    $('#planet-5-moon-4').css('display', 'block');
    $('#planet-5-moon-5').css('display', 'none');
    $('#planet-5-moon-6').css('display', 'none');
    $('#planet-5-moon-7').css('display', 'none');
    $('#planet-5-moon-8').css('display', 'none');
})

$(document).on('click', '.planet-5-moon-carousel-5', function() {
    $('#planet-5-moon-1').css('display', 'none');
    $('#planet-5-moon-2').css('display', 'none');
    $('#planet-5-moon-3').css('display', 'none');
    $('#planet-5-moon-4').css('display', 'none');
    $('#planet-5-moon-5').css('display', 'block');
    $('#planet-5-moon-6').css('display', 'none');
    $('#planet-5-moon-7').css('display', 'none');
    $('#planet-5-moon-8').css('display', 'none');
})

$(document).on('click', '.planet-5-moon-carousel-6', function() {
    $('#planet-5-moon-1').css('display', 'none');
    $('#planet-5-moon-2').css('display', 'block');
    $('#planet-5-moon-3').css('display', 'none');
    $('#planet-5-moon-4').css('display', 'none');
    $('#planet-5-moon-5').css('display', 'none');
    $('#planet-5-moon-6').css('display', 'block');
    $('#planet-5-moon-7').css('display', 'none');
    $('#planet-5-moon-8').css('display', 'none');
})

$(document).on('click', '.planet-5-moon-carousel-7', function() {
    $('#planet-5-moon-1').css('display', 'none');
    $('#planet-5-moon-2').css('display', 'none');
    $('#planet-5-moon-3').css('display', 'none');
    $('#planet-5-moon-4').css('display', 'none');
    $('#planet-5-moon-5').css('display', 'none');
    $('#planet-5-moon-6').css('display', 'none');
    $('#planet-5-moon-7').css('display', 'block');
    $('#planet-5-moon-8').css('display', 'none');
})

$(document).on('click', '.planet-5-moon-carousel-8', function() {
    $('#planet-5-moon-1').css('display', 'none');
    $('#planet-5-moon-2').css('display', 'none');
    $('#planet-5-moon-3').css('display', 'none');
    $('#planet-5-moon-4').css('display', 'none');
    $('#planet-5-moon-5').css('display', 'none');
    $('#planet-5-moon-6').css('display', 'none');
    $('#planet-5-moon-7').css('display', 'none');
    $('#planet-5-moon-8').css('display', 'block');
})

// SATURN
$(document).on('click', '.planet-carousel-6', function() {
    $('#planet-1').css('display', 'none');
    $('#planet-2').css('display', 'none');
    $('#planet-3').css('display', 'none');
    $('#planet-4').css('display', 'none');
    $('#planet-5').css('display', 'none');
    $('#planet-6').css('display', 'block');
    $('#planet-7').css('display', 'none');
    $('#planet-8').css('display', 'none');
    // MOON SECTION
    $('#planet-1-moon').css('display', 'none');
    $('#planet-2-moon').css('display', 'none');
    $('#planet-3-moon').css('display', 'none');
    $('#planet-4-moon').css('display', 'none');
    $('#planet-5-moon').css('display', 'none');
    $('#planet-6-moon').css('display', 'block');
    $('#planet-7-moon').css('display', 'none');
    $('#planet-8-moon').css('display', 'none');
})

$(document).on('click', '.planet-carousel-7', function() {
    $('#planet-1').css('display', 'none');
    $('#planet-2').css('display', 'none');
    $('#planet-3').css('display', 'none');
    $('#planet-4').css('display', 'none');
    $('#planet-5').css('display', 'none');
    $('#planet-6').css('display', 'none');
    $('#planet-7').css('display', 'block');
    $('#planet-8').css('display', 'none');
    // MOON SECTION
    $('#planet-1-moon').css('display', 'none');
    $('#planet-2-moon').css('display', 'none');
    $('#planet-3-moon').css('display', 'none');
    $('#planet-4-moon').css('display', 'none');
    $('#planet-5-moon').css('display', 'none');
    $('#planet-6-moon').css('display', 'none');
    $('#planet-7-moon').css('display', 'block');
    $('#planet-8-moon').css('display', 'none');
})

$(document).on('click', '.planet-carousel-8', function() {
    $('#planet-1').css('display', 'none');
    $('#planet-2').css('display', 'none');
    $('#planet-3').css('display', 'none');
    $('#planet-4').css('display', 'none');
    $('#planet-5').css('display', 'none');
    $('#planet-6').css('display', 'none');
    $('#planet-7').css('display', 'none');
    $('#planet-8').css('display', 'block');
    // MOON SECTION
    $('#planet-1-moon').css('display', 'none');
    $('#planet-2-moon').css('display', 'none');
    $('#planet-3-moon').css('display', 'none');
    $('#planet-4-moon').css('display', 'none');
    $('#planet-5-moon').css('display', 'none');
    $('#planet-6-moon').css('display', 'none');
    $('#planet-7-moon').css('display', 'none');
    $('#planet-8-moon').css('display', 'block');
})