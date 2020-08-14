$(document).on('click', '#Dark-Mode-Btn', function() {
    $('#Light-Mode-Btn').removeClass('settings-btn-active')
    $('#Martian-Mode-Btn').removeClass('settings-btn-active')
    $('#Dark-Mode-Btn').addClass('settings-btn-active')
    $('body').removeClass('LightMode MartianMode').addClass('DarkMode')
})

$(document).on('click', '#Light-Mode-Btn', function() {
    $('#Dark-Mode-Btn').removeClass('settings-btn-active')
    $('#Martian-Mode-Btn').removeClass('settings-btn-active')
    $('#Light-Mode-Btn').addClass('settings-btn-active')
    $('body').removeClass('MartianMode DarkMode').addClass('LightMode')
})

$(document).on('click', '#Martian-Mode-Btn', function() {
    $('#Light-Mode-Btn').removeClass('settings-btn-active')
    $('#Dark-Mode-Btn').removeClass('settings-btn-active')
    $('#Martian-Mode-Btn').addClass('settings-btn-active')
    $('body').removeClass('LightMode DarkMode').addClass('MartianMode')
})