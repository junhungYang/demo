$('.btn').on('click', function () {
    $('.shareBox').addClass('shareActive')
    $('.mask').addClass('maskActive')
})

$('.closeBtn').on('click', function () {
    $('.shareBox').removeClass('shareActive')
    $('.mask').removeClass('maskActive')
})