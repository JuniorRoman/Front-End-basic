$(function () {
  $(".burger").on("click", function () {
    $(".burger").toggleClass("burger--active");
    $(".nav").toggleClass("burger--active");
    $("body").toggleClass("lock");
  });

  $(".logo, .header__box a").on("click", function (e) {
    e.preventDefault();
  });
  
});