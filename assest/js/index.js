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
});
