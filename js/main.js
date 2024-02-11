$(function () {
  $(".burger").on("click", function () {
    $(".burger").toggleClass("burger--active");
    $(".nav, .colaps").toggleClass("burger--active");
    $("body").toggleClass("lock");
  });
});
