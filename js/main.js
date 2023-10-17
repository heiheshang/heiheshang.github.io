$(document).ready(function () {

  $(".bar-icon").click(function () {
    $(".menu-list").slideToggle(300);
  });

  $(window).resize(function () {
    if ($(window).width() > 992) {
      $(".menu-list").css("display", "none");
    }
  });

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
