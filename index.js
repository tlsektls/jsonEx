$(document).ready(function() {
  // 스크롤시 헤더 배경 생김
  $(window).scroll(function(){
    let user_scroll = $(window).scrollTop();
    if(user_scroll > 50){
      $('header').addClass('down');
    } else if(user_scroll < 50){
      $('header').removeClass('down');
    }
  });

  const swiper = new Swiper(".back_container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  }); 

  // aos
  AOS.init();
});