const header = document.querySelector(".header__menu_all");
const mobi_togglers = document.querySelector(".header__menu-toggler");
const header_menu = document.querySelector(".list__menu");
const overlay = document.querySelector(".overlay-menu");

window.onscroll = function () {
  if (
    document.documentElement.scrollTop > 150 ||
    document.body.scrollTop > 150
  ) {
    header.classList.add("active");
    header_menu.classList.add("menu-scroll");
    overlay.classList.add("overlay-scroll");
  } else {
    header.classList.remove("active");
    header_menu.classList.remove("menu-scroll");
    overlay.classList.remove("overlay-scroll");
  }
};

mobi_togglers.addEventListener("click", () => {
  header_menu.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  header_menu.classList.remove("active");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 7000,
  responsive: {
    100: {
      items: 1,
    },
    500: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1920: {
      items: 1,
    },
  },
});
