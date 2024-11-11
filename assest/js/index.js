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

  $(".nav-link").on("click", function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  var bollen = true;
  $("#divBackgroundColor").on("click", function () {
    if (bollen) {
      $("#diMenu1").css({
        transform: "translateY(3px) rotate(45deg)",
      });
      $("#diMenu2").hide();
      $("#diMenu3").css({
        transform: "translateY(-3px) rotate(-45deg)",
      });
      $("#navbarSupportedContent").css("right", "0");
      bollen = false;
    } else {
      $("#diMenu1").css("transform", "rotate(0deg)");
      $("#diMenu2").show();
      $("#diMenu3").css("transform", "rotate(0deg)");
      $("#navbarSupportedContent").css("right", "-900px");
      bollen = true;
    }
  });
});
