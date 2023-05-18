//Header

const header = document.getElementById("main__header");
let prevScrollPos = window.pageYOffset;
function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
    header.style.top = "0";
  } else {
    header.style.top = `-${header.offsetHeight}px`;
  }
  prevScrollPos = currentScrollPos;
}
window.addEventListener("scroll", handleScroll);

// Hero Section

let myCarousel = document.querySelectorAll(
  "#featureContainer .carousel .carousel-item"
);
myCarousel.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      next = myCarousel[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
