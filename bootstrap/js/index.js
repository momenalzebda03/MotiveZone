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

var bollen = true;
var div_backgroundcolor = document.getElementById("div_backgroundcolor");
var navbarSupportedContent = document.getElementById("navbarSupportedContent");
var div_menu1 = document.getElementById("div_menu1");
var div_menu2 = document.getElementById("div_menu2");
var div_menu3 = document.getElementById("div_menu3");
div_backgroundcolor.onclick = () => {
  if (bollen === true) {
    div_menu1.style.transform = "translateY(3px) rotate(45deg)";
    div_menu2.style.display = "none";
    div_menu3.style.transform = "translateY(-3px) rotate(-45deg)";
    navbarSupportedContent.style.right = "0";
    bollen = false;
  } else {
    div_menu1.style.transform = "rotate(0deg)";
    div_menu2.style.display = "block";
    div_menu3.style.transform = "rotate(0deg)";
    navbarSupportedContent.style.right = "-900px";
    bollen = true;
  }
};
