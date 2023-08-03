// var swiper = new Swiper(".slide-intro", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

$(function () {
  $(".goods-lst__els").removeClass("active");
  $(".goods-lst__trigger").on("click", function () {
    $(".goods-lst__els").toggleClass("active");
    $(".goods-lst__trigger").toggleClass("on");
  });
});
