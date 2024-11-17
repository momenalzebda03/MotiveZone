$(document).ready(function () {
  $("#mobile-menu-button").click(function () {
    $("#mobile-menu").toggleClass("hidden");
  });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 100) {
      $("#navbarScroll").css(
        "background",
        "linear-gradient(155deg, rgb(30, 77, 141), rgb(56, 113, 166))"
      );
    } else {
      $("#navbarScroll").css("background", "transparent");
    }
  });

  const $items = $("[data-carousel-item]");
  let currentIndex = 0;

  function showItem(index) {
    $items.each(function (i) {
      if (i == index) {
        $(this).removeClass("hidden").addClass("duration-200 ease-linear");
      } else {
        $(this).addClass("hidden");
      }
    });
  }

  showItem(currentIndex);

  $("#prevBtn").on("click", function () {
    currentIndex = (currentIndex - 1 + $items.length) % $items.length;
    showItem(currentIndex);
  });

  $("#nextBtn").on("click", function () {
    currentIndex = (currentIndex + 1) % $items.length;
    showItem(currentIndex);
  });

  $("#owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
