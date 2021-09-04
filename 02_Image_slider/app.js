//

const slides = document.querySelectorAll(".slide"),
  next = document.querySelector("#next"),
  prev = document.querySelector("#prev"),
  auto = false,
  intervalTime = 5000;

let slideInterval;

const nextSlide = function () {
  const current = document.querySelector(".current");
  console.log(current);

  // remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    //   add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    //   go to first and add current to it
    slides[0].classList.add("current");
  }

  setTimeout(() => {
    current.classList.remove("current");
  });
};

const prevSlide = function () {
  const current = document.querySelector(".current");
  console.log(current);

  // remove current class
  current.classList.remove("current");
  // check for prev slide
  if (current.previousElementSibling) {
    //   add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    //   go to last and add current to it
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => {
    current.classList.remove("current");
  });
};

// add events

next.addEventListener("click", () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// autoSlide

if (auto) {
  // run Next Slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
