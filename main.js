const navigationButtons = document.getElementsByClassName("navigation__button");
const navigationItems = document.getElementsByClassName("navigation__items");
const main = document.querySelector("main");

// Voeg event listeners toe aan navigation__button-elementen
for (let i = 0; i < navigationButtons.length; i++) {
  navigationButtons[i].addEventListener("mouseover", function() {
    main.style.opacity = "0.9";
  });

  navigationButtons[i].addEventListener("mouseout", function() {
    main.style.opacity = "1";
  });
}

// Voeg event listeners toe aan navigation__items-elementen
for (let i = 0; i < navigationItems.length; i++) {
  navigationItems[i].addEventListener("mouseover", function() {
    main.style.opacity = "0.9";
  });

  navigationItems[i].addEventListener("mouseout", function() {
    main.style.opacity = "1";
  });
}


// reviews

const carousel = document.getElementById("js--reviews");
const leftButton = document.querySelector(".reviewsection__arrow:first-child");
const rightButton = document.querySelector(".reviewsection__arrow:last-child");
let isDragStart = false;
let prevPageX, prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

const stopDraggingOutside = () => {
  if (isDragStart) {
    isDragStart = false;
    window.removeEventListener("mousemove", dragging);
  }
};

carousel.addEventListener("mousedown", (e) => {
  dragStart(e);
  window.addEventListener("mousemove", dragging);
});

carousel.addEventListener("mouseup", dragStop);
window.addEventListener("mouseup", stopDraggingOutside);

const smoothScrollTo = (element, start, end, duration) => {
  const startTime = performance.now();

  const easeInOutQuad = (t) => {
    t /= duration / 2;
    if (t < 1) return (end - start) / 2 * t * t + start;
    t--;
    return -(end - start) / 2 * (t * (t - 2) - 1) + start;
  };

  const animateScroll = (timestamp) => {
    const elapsedTime = timestamp - startTime;

    if (elapsedTime >= duration) {
      element.scrollLeft = end;
      return;
    }

    const position = easeInOutQuad(elapsedTime);
    element.scrollLeft = position;

    requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateScroll);
};

leftButton.addEventListener("click", () => {
  smoothScrollTo(carousel, carousel.scrollLeft, carousel.scrollLeft - carousel.offsetWidth, 300);
  checkCarouselPosition();
});

rightButton.addEventListener("click", () => {
  smoothScrollTo(carousel, carousel.scrollLeft, carousel.scrollLeft + carousel.offsetWidth, 300);
  checkCarouselPosition();
});



const checkCarouselPosition = () => {
  leftButton.style.display = carousel.scrollLeft === 0 ? 'none' : 'flex';
  rightButton.style.display = carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth ? 'none' : 'flex';
};
carousel.addEventListener("scroll", checkCarouselPosition);

window.addEventListener("load", () => {
  checkCarouselPosition();
});