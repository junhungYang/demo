var key = true
$('.item').on('click', function () {


    if (key == true) {
        $(this).addClass('itemActive')
        $('.item').not('.itemActive').addClass('itemUnActive')
        $('.title').fadeOut()
        $('.itemActive>.inner>.direction').css('display', 'block')
        key = false
    }
})
$('.close').on('click', function (e) {
    e.stopPropagation();
    $('.itemActive>.inner>.direction').css('display', 'none');
    $('.itemActive').removeClass('itemActive');
    $('.itemUnActive').removeClass('itemUnActive');
    $('.title').fadeIn()
    key = true
})