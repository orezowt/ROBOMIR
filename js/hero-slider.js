var heroSlideCount
var heroSlideWidth
var heroSlideUlWidth

var courseSlideCount
var courseSlideWidth
var courseSlideUlWidth

var timerID
var currentPressedBtn = null
var sliderID


jQuery(document).ready(function($){
    heroSliderResize()
    setInterval(function() { moveRight("#hero-image-slider", heroSlideWidth); }, 4000);

    $('.button-read-more').click(function(){
      clearInterval(timerID)
      sliderID = '#' + $(this).parent().parent().attr('id')

      if ($(this).text() != 'Узнать больше'){
        currentPressedBtn = $(this)
        courseSliderResize(sliderID)
        timerID = setInterval(() => { moveRight(sliderID + " .course-slider", courseSlideWidth) }, 4000)
      }
      else{
        currentPressedBtn = null
      }
    })
  });


$(window).resize(function(){
  heroSliderResize("#hero-image-slider")
  if (currentPressedBtn != null){
    courseSliderResize(sliderID)
    $(sliderID).removeClass('full-description')
    $(currentPressedBtn).text('Узнать больше')
  }
})


// измерение размеров hero слайдера
function heroSliderResize(){
  heroSlideCount = $("#hero-image-slider ul li").length;
  heroSlideWidth = $("#hero-image-slider").width();
  heroSlideUlWidth = heroSlideCount * heroSlideWidth;

  $("#hero-image-slider ul li").css({ width: heroSlideWidth, height: '100%'});
  $("#hero-image-slider ul").css({ width: heroSlideUlWidth, marginLeft: -heroSlideWidth });
  $("#hero-image-slider ul li:last-child").prependTo("#hero-image-slider ul");
}


// измерение размеров слайдера в карточках курсов
function courseSliderResize(slider){
  courseSlideCount = $(slider + " .course-slider ul li").length;
  courseSlideWidth = $(slider + " .course-slider").width();
  courseSlideUlWidth = courseSlideCount * courseSlideWidth;

  $(slider + " .course-slider ul li").css({ width: courseSlideWidth, height: '100%'});
  $(slider + " .course-slider ul").css({ width: courseSlideUlWidth, marginLeft: -courseSlideWidth });
  $(slider + " .course-slider ul li:last-child").prependTo(slider + " .course-slider ul");
}


function moveRight(slider, slideWidth) {
  $(slider + " ul").animate(
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