$(document).ready(function() {
  new Swiper('.main-swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false,
    effect: 'fade'
  });
  var premium = new Swiper('.premium-swiper-container', {
    slidesPerView: 3
  });
  var premiumM = new Swiper('.premium-swiper-container-mobile', {
    slidesPerView: 1.8,
    spaceBetween: '5.2%'
  });
  new Swiper('.location-swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    effect: 'fade',
  });

  $('.swiper-custom-button--next').on('click', function () {
    premium.slideNext()
    premiumM.slideNext()
  });

  $('.swiper-custom-button--prev').on('click', function () {
    premium.slidePrev()
    premiumM.slidePrev()
  });


  AOS.init({
    useClassNames: true,
    initClassName: false,
    duration: 2000,
    animatedClassName: 'is--active',
  });

  $('img[usemap]').rwdImageMaps();

});
