(function () {
    $('.btnList').toggleClass('open');
    rotate()
})()

$('.mainBtn').on('click', function () {
    if ($('.btnList').hasClass('open')) {
        $('.btnList>div').css('transform', 'rotate(-360deg)');
        $('.btnList').toggleClass('open');
    } else {
        rotate();
        $('.btnList').toggleClass('open');
    }

})

function rotate() {
    $('.btnList>div').each(function (index, item) {
        $(item)
            .css('transform', `rotate(${45*index}deg)`)
            .find('label').css('transform', `rotate(${-45*index}deg)`)
    })
}