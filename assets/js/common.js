$(function() {
  // intro 실행

  $(window).scroll(function (){
   var scroll = $(document).scrollTop();
    if (scroll > 0) {
      $('.js-header').addClass('is--sticky')
    }else {
      $('.js-header').removeClass('is--sticky')
    }
  })

  // 모바일 메뉴 버튼 열기/닫기
  $('.js-header-menu-button').on('click',function (){
    $(this).parents('.js-header').toggleClass('is--open');
  })

  $('.header-menu-item').on('mouseover', function (){
    var width = $(window).width();

    if(width > 991) {
      if ($(this).has('.js-menu-list--depth').length > 0) {
        $('.js-header').addClass('is--show-depth')
      }
    }
  }).on('mouseout', function () {
    $('.js-header').removeClass('is--show-depth')
  })


  $('.js-input-select').selectmenu();


});
