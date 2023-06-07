const carousel = document.getElementById("js--product");
const leftButton = document.querySelector(".foto__arrow:first-child");
const rightButton = document.querySelector(".foto__arrow:last-child");
const imgSliderImages = document.querySelectorAll(".img__fotoslider img");

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

imgSliderImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    const imageWidth = carousel.offsetWidth;
    const targetPosition = index * imageWidth;
    smoothScrollTo(carousel, carousel.scrollLeft, targetPosition, 300);
    checkCarouselPosition();

    imgSliderImages.forEach((img) => {
      img.classList.remove("active");
    });
    image.classList.add("active");
  });
});

window.addEventListener("load", () => {
  checkCarouselPosition();
});




// Get the buttons, product images, slider images, and the h4 element
const buttons = document.querySelectorAll('.variatie');
const productImages = document.querySelectorAll('#js--product img');
const sliderImages = document.querySelectorAll('.img__fotoslider img');
const titleElement = document.querySelector('h4');

// Define the image sources and titles for each button
const variations = [
  {
    images: [
      'img/1000rr/lightWhite/blob_https___www.bmw-motorrad.nl_2586d187-8c11-4fe7-9ba3-2c78a3fd6ac1',
      'img/1000rr/lightWhite/blob_https___www.bmw-motorrad.nl_9ea78c9f-5907-400a-b948-7c7e05de442b',
      'img/1000rr/lightWhite/blob_https___www.bmw-motorrad.nl_1b9c1c44-2f13-41a8-9abe-180bccea3e08',
      'img/1000rr/lightWhite/blob_https___www.bmw-motorrad.nl_29100807-e7a5-45b4-a1b5-7a5c562262e7'
    ],
    title: 'Lightwhite uni/M Motorsport'
  },
  {
    images: [
      'img/1000rr/red/blob_https___www.bmw-motorrad.nl_9a01ffff-f94f-4eb0-9598-ce3a579c95f1',
      'img/1000rr/red/blob_https___www.bmw-motorrad.nl_d42a55d3-8f09-49d3-849d-46a378167b5f',
      'img/1000rr/red/blob_https___www.bmw-motorrad.nl_56f5c1e1-774f-4413-83bb-930892685c2a',
      'img/1000rr/red/blob_https___www.bmw-motorrad.nl_58d57591-6b30-4eb9-b60c-57903bcbc717'
    ],
    title: 'Passie'
  },
  {
    images: [
      'img/1000rr/black/blob_https___www.bmw-motorrad.nl_8957f056-5ac3-4025-bfab-adc0717a1160',
      'img/1000rr/red/blob_https___www.bmw-motorrad.nl_56f5c1e1-774f-4413-83bb-930892685c2a',
      'img/1000rr/red/blob_https___www.bmw-motorrad.nl_58d57591-6b30-4eb9-b60c-57903bcbc717',
      'img/1000rr/black/blob_https___www.bmw-motorrad.nl_af03bb79-a051-43f2-9041-6c315a4570f7'
    ],
    title: 'Blackstorm metallic'
  }
];

// Add click event listener to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach((btn) => {
      btn.classList.remove('actiev');
    });

    // Add active class to the clicked button
    button.classList.add('actiev');

    // Change the source of the product images
    productImages.forEach((img, i) => {
      img.src = `${variations[index].images[i]}`;
    });

    // Change the source of the slider images
    sliderImages.forEach((img, i) => {
      img.src = `${variations[index].images[i]}`;
    });

    // Update the title text
    titleElement.textContent = variations[index].title;
  });
});
