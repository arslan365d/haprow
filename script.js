let navOpen = document.querySelector("#nav-open")
let navMenu = document.querySelector(".nav__menu")
let navClose = document.querySelector("#nav-close")
let navItem = document.querySelectorAll(".nav__item")

navOpen.addEventListener("click",()=>{
  navMenu.classList.add("show__menu")
})
navClose.addEventListener("click",()=>{
  navMenu.classList.remove("show__menu")
})
navItem.forEach(e=>{
  e.addEventListener("click",()=>{
    navMenu.classList.remove("show__menu")
  })
})

// swiper js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30, // Space between slides

  breakpoints: {
    1200: {
      slidesPerView: 3, // Show 4 slides
    },
    // When the window width is >= 992px
    992: {
      slidesPerView: 3, // Show 3 slides
    },
    // When the window width is >= 768px
    770: {
      slidesPerView: 2, // Show 2 slides
    },
    // When the window width is < 768px (e.g., mobile)
    710: {
      slidesPerView: 1, // Show 1 slide
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  grabCursor:true,


});