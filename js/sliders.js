$(document).ready(function(){
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    // {
    //   breakpoint: 768,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false
    //   }
    // },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    ]
  });

  if (window.innerWidth <= 601){
    $('.courses-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
  })
  }
  else{
    // $('.courses-slider').unslick()
  }
});

$(window).resize(function(){
  if (window.innerWidth > 601){
    if ($('.courses-slider').hasClass('slick-initialized')){
      $('.courses-slider').slick('unslick')
    }
  }
  else{
    if(!$('.courses-slider').hasClass('slick-slider')){
      $('.courses-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
        })
      }
    }
})
