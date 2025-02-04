var slideCount
var slideWidth
var sliderUlWidth

jQuery(document).ready(function ($) {
    sliderResize("#hero-image-slider")
    sliderResize('.course-slider')

    setInterval(function() { moveRight("#hero-image-slider"); }, 3000);
    setInterval(function() { moveRight(".course-slider"); }, 4000);
  });

$(window).resize(function(){
  sliderResize("#hero-image-slider")
  sliderResize(".course-slider")
})

  function sliderResize(slider){
    slideCount = $(slider + " ul li").length;
    slideWidth = $(slider).width();
    // var slideHeight = $("#hero-image-slider ul li").height();
    sliderUlWidth = slideCount * slideWidth;


    $(slider + " ul li").css({ width: slideWidth, height: '100%'});
    $(slider + " ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

    $(slider + " ul li:last-child").prependTo(slider + " ul");
  }


  function moveRight(slider) {
    $(slider+ " ul").animate(
      {
        left: -slideWidth
      },
      500,
      function () {
        $(slider + " ul li:first-child").appendTo(slider + " ul");
        $(slider + " ul").css("left", "");
      }
    );
  }
