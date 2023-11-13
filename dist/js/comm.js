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

  $(".product-opt_tit").removeClass("active");
  $(".product-opt_tit").on("click", function () {
    // $(".product-opt_txt").toggleClass("active");
    // $(".product-opt_tit").toggleClass("on");

    // $(".product_option").toggleClass("active");
    $(this).parent().toggleClass("active");
  });

  // 아코디언

  $(".accord_title").on("click", function (event) {
    event.preventDefault();
    // $(".accord_item").removeClass("active");
    $(this).parent().toggleClass("active");
  });

  // gsap
  const toTopEl = document.querySelector(".mo_fixed_option");
  window.addEventListener(
    "scroll",
    _.throttle(function () {
      if (window.scrollY > 200) {
        gsap.to(toTopEl, 0.2, {
          bottom: "-100px",
        });
      } else {
        gsap.to(toTopEl, 0.2, {
          bottom: "-180px",
        });
      }
    }, 300)
  );

  $(".mo_fixed_option").on("click", function () {
    $(this).toggleClass("active");
  });
});
