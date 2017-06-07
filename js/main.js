$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: '.slider-nav',
    autoplay:true,
    autoplaySpeed:2500
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay:true,
    autoplaySpeed:2500
  });

  $('.video-click-text').click(function (e) {
    e.preventDefault();
    var src = 'https://www.youtube.com/embed/3ZqPpDeTBZU?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1';
    $('#myModal iframe').attr('src', src);
  });


  $('#myModal').on('hidden.bs.modal', function () {
    $('#myModal iframe').removeAttr('src');
  });
});