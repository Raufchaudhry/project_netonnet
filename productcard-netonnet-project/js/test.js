// JavaScript for clicking on small images to display big image in the first slide
document.querySelectorAll('.small-image').forEach((item, index) => {
  item.addEventListener('click', () => {
    const bigImage = document.querySelector('.big-image');
    bigImage.src = item.querySelector('img').src;
    // Remove previous center class and highlighted class
    document.querySelector('.small-image.center')?.classList.remove('center');
    document.querySelector('.highlighted')?.classList.remove('highlighted');
    // Add center class and highlighted class to clicked image
    item.classList.add('center');
    item.classList.add('highlighted');
  });
});

const smallImageContainer = document.getElementById('smallImageContainer');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Function to scroll small images to the left
leftArrow.addEventListener('click', () => {
  smallImageContainer.scrollBy({
    left: -100, // Adjust scroll amount as needed
    behavior: 'smooth'
  });
});

// Function to scroll small images to the right
rightArrow.addEventListener('click', () => {
  smallImageContainer.scrollBy({
    left: 100, // Adjust scroll amount as needed
    behavior: 'smooth'
  });
});

// Highlight the center image on page load
highlightCenterImage();

// Highlight the center image and update the big image when scrolling stops
smallImageContainer.addEventListener('scroll', highlightCenterImage);

function highlightCenterImage() {
  const smallImages = document.querySelectorAll('.small-image');
  const container = document.querySelector('.small-image-container');
  const containerRect = container.getBoundingClientRect();
  const center = containerRect.left + containerRect.width / 2;

  smallImages.forEach((image) => {
    const imageRect = image.getBoundingClientRect();
    const imageCenter = imageRect.left + imageRect.width / 2;

    if (imageCenter === center) {
      // Remove previous center and highlighted classes
      document.querySelector('.small-image.center')?.classList.remove('center');
      document.querySelector('.highlighted')?.classList.remove('highlighted');

      // Add center and highlighted classes to the current image
      image.classList.add('center');
      image.classList.add('highlighted');

      // Update the big image
      document.querySelector('.big-image').src = image.querySelector('img').src;
    }
  });
}


document.addEventListener("DOMContentLoaded", function() {
  const productDescription = document.querySelector('.productbeskriving');
  const huvudContainer = document.querySelector('.huvud-container');

  productDescription.addEventListener('click', function() {
    // Toggle visibility of huvud-container
    if (huvudContainer.style.display === 'none') {
      huvudContainer.style.display = 'block';
    } else {
      huvudContainer.style.display = 'none';
    }
  });
});