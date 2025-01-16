var slideCount
var slideWidth
var sliderUlWidth

jQuery(document).ready(function ($) {
    sliderResize()
    setInterval(function () {
      moveRight();
    }, 3000);
  });

$(window).resize(function(){
  sliderResize()
})


  function sliderResize(){
    slideCount = $("#hero-image-slider ul li").length;
    slideWidth = $("#hero-image-slider").width();
    // var slideHeight = $("#hero-image-slider ul li").height();
    sliderUlWidth = slideCount * slideWidth;


    $("#hero-image-slider ul li").css({ width: slideWidth, height: '100%'});
    $("#hero-image-slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

    $("#hero-image-slider ul li:last-child").prependTo("#hero-image-slider ul");
  }


  function moveRight() {
    $("#hero-image-slider ul").animate(
      {
        left: -slideWidth
      },
      500,
      function () {
        $("#hero-image-slider ul li:first-child").appendTo("#hero-image-slider ul");
        $("#hero-image-slider ul").css("left", "");
      }
    );
  }
// });
