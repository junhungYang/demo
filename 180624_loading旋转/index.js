animate()
setInterval(function () {
  animate()
}, 3750);

function animate() {
  $(".circleGroup>li").removeClass('liRotate');
  setTimeout(function () {
    $(".circleGroup>li").addClass('liRotate');
  }, 200)
}