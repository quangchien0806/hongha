const header = document.querySelector(".header__menu_all");
const mobi_togglers = document.querySelector(".header__menu-toggler");
const header_menu = document.querySelector(".list__menu");
const overlay = document.querySelector(".overlay-menu");
const header_sticky = document.querySelector("#one");
const scrollUp_up = document.querySelector(".scrollUp__up");

//

scrollUp_up.addEventListener("click", scrollToTop);

function scrollToTop() {
  var position = document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout("scrollToTop()", 30);
  } else clearTimeout(scrollAnimation);
}

window.onscroll = function () {
  if (
    document.documentElement.scrollTop > 100 ||
    document.body.scrollTop > 100
  ) {
    header.classList.add("active");
    header_menu.classList.add("menu-scroll");
    overlay.classList.add("overlay-scroll");
    scrollUp_up.classList.add("active");
  } else {
    header.classList.remove("active");
    header_menu.classList.remove("menu-scroll");
    overlay.classList.remove("overlay-scroll");
    scrollUp_up.classList.remove("active");
  }
  myFunction();
};

const header_product = document.querySelector(".feature");
if (header_product) {
  var sticky = header_product.offsetTop;
}

function myFunction() {
  if (!header_product) return;
  if (window.pageYOffset > sticky) {
    header_product.classList.add("sticky");
    header_sticky.classList.add("header-sticky");
  } else {
    header_product.classList.remove("sticky");
    header_sticky.classList.remove("header-sticky");
  }
}

$(document).ready(function () {
  $(".feature-link").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("href");
    var offsetTop = $(id).offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: offsetTop - 160,
      },
      300
    );
  });
});

// click menu__con
mobi_togglers.addEventListener("click", () => {
  header_menu.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  header_menu.classList.remove("active");
});

// slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<img src="img/logo/prev.png" alt="">',
    '<img src="img/logo/next.png" alt="">',
  ],
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

// scroll detailed
// const scrollElems = document.querySelectorAll(".scroll");
// // Now add an event listeners to those element
// for (let i = 0; i < scrollElems.length; i++) {
//   const elem = scrollElems[i];

//   elem.addEventListener("click", function (e) {
//     e.preventDefault();

//     // 1. Get the element id to which you want to scroll
//     const scrollElemId = e.target.href.split("#")[1];

//     // 2. find that node from the document
//     const scrollEndElem = document.getElementById(scrollElemId);

//     // 3. and well animate to that node..
//     const anim = requestAnimationFrame((timestamp) => {
//       const stamp = timestamp || new Date().getTime();
//       const duration = 2200;
//       const start = stamp;

//       const startScrollOffset = window.pageYOffset;
//       const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

//       scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
//     });
//   });
// }
