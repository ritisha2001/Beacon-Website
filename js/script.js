//nav toggler

const navbartoggler = document.querySelector(".navbartoggler");
const navlinks = document.getElementById("nav-links");

let nav = false;

function myfunction() {
  if (nav == false) {
    navlinks.style.display = "block";
    nav = true;
  } else {
    navlinks.style.display = "none";
    nav = false;
  }
  console.log(nav);
}
navbartoggler.addEventListener("click", myfunction);

//slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",   
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
