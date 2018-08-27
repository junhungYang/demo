(function () {
    var index = 0
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 5; j++) {
            $(`.item:eq(${j})>.img:eq(${i})`).css('background-position-x', `${-160 * j}px`);
        }
    }
})()

var trangle = 0;
var key = true;
$('.prev').on('click', function () {
    if (key == true) {
        trangle += 90;
        trangleChange();
        key = false;
    }
})
$('.next').on('click', function () {
    if (key == true) {
        trangle -= 90;
        trangleChange();
        key = false;
    }
})

function trangleChange() {
    $('.item').css('transform', `rotateX(${trangle}deg)`);
}
$('.item:eq(4)').on('transitionend', function () {
    console.log(this)
    key = true;
})