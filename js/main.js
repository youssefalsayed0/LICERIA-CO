let arrow = document.getElementById("floating-arrow");
let menu = document.getElementById("toggle");
let navig = document.getElementById("main-header");
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    navig.style.position = "sticky";
    navig.style.backgroundColor = "#822fff";
  } else {
    navig.style.position = "relative";
    navig.style.backgroundColor = "transparent";
  }

  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
};


function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}



/* owl slider */
function logo_carouselInit() {
  $('.product_items').owlCarousel({
      loop: true,
      margin: 40,
      smartSpeed: 1400,
      autoplay: true,
      autoplayTimeout: 1400,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 3
          },
          576: {
              items: 3,
          },
          768: {
              items: 5,
          },
          992: {
              items: 6,
          }
      }
  })

}
logo_carouselInit();

