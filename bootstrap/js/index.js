let navbar_scroll = document.getElementById("navbar_scroll");
window.onscroll = function () {
  this.scrollY >= 100
    ? (navbar_scroll.style.background =
        "linear-gradient(155deg, rgb(30, 77, 141), rgb(56, 113, 166))")
    : (navbar_scroll.style.background = "transparent");
};

var tag_header = document.querySelectorAll(".nav-link");
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < tag_header.length; i++) {
      tag_header[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}

var tag_header = document.querySelectorAll(".link_active");
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < tag_header.length; i++) {
      tag_header[i].classList.remove("active_menu");
    }
    this.classList.add("active_menu");
  });
}
