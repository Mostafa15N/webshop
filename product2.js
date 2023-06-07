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
      'img/1250rs/white/blob_https___www.bmw-motorrad.nl_d6592643-a8db-4013-ad8f-de1eebb4f334',
      'img/1250rs/white/blob_https___www.bmw-motorrad.nl_03670582-a75b-45e4-821b-d5d6700d6240',
      'img/1250rs/white/blob_https___www.bmw-motorrad.nl_2b4bb577-bab2-4bd8-8d77-466f59e502f8',
      'img/1250rs/white/blob_https___www.bmw-motorrad.nl_6931551f-dd2a-4c07-8a01-be92955c03d9'
    ],
    title: 'Light white uni'
  },
  {
    images: [
      'img/1250rs/sport/blob_https___www.bmw-motorrad.nl_79eb7030-e3d7-456e-8ca6-63096e18f13d',
      'img/1250rs/sport/blob_https___www.bmw-motorrad.nl_8effa437-e877-409b-803e-c06899d1d7c7',
      'img/1250rs/sport/blob_https___www.bmw-motorrad.nl_d2ccc1a4-89d3-4f18-9063-2718761ed1d4',
      'img/1250rs/sport/blob_https___www.bmw-motorrad.nl_1271cae5-17b4-469e-a424-2be24c7ce9df'
    ],
    title: 'Sport'
  },
  {
    images: [
      'img/1250rs/black/blob_https___www.bmw-motorrad.nl_ae5f587c-355b-4496-812f-f25ac7174525',
      'img/1250rs/black/blob_https___www.bmw-motorrad.nl_f568529f-8988-4eca-a592-3ebfcd8abd3f',
      'img/1250rs/black/blob_https___www.bmw-motorrad.nl_807cd8a3-1a48-4e45-8384-462c6cf27ceb',
      'img/1250rs/black/blob_https___www.bmw-motorrad.nl_d7f461b3-6004-4b53-b225-fe62f7f918b0'
    ],
    title: 'Triple Black'
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
