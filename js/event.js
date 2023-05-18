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

// Providing Electric Vehicle Bannar JavaScript counter code

function startCounter() {
  let count = 0;
  const endValue = 867;
  const counterElement = document.getElementById("counter");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const intervalId = setInterval(() => {
          count++;
          counterElement.textContent = count.toLocaleString();

          if (count >= endValue) {
            clearInterval(intervalId);
          }
        }, 5);
        counterElement.classList.add("counter");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(document.querySelector(".providing__vehicle__banner__img"));
}

startCounter();
