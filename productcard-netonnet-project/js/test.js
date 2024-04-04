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




/*document.addEventListener('DOMContentLoaded', function() {
  const infoLink = document.querySelector('.infoside');
  const tryghetLink = document.querySelector('.tryghet');
  const popup = document.querySelector('.popups');
  const bodyOverlay = document.querySelector('.body-overlay');

  infoLink.addEventListener('click', togglePopup);
  tryghetLink.addEventListener('click', togglePopup);
  document.getElementById('cross').addEventListener('click', togglePopup);

  function togglePopup() {
      popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
      bodyOverlay.style.display = bodyOverlay.style.display === 'none' ? 'block' : 'none';
      document.body.classList.toggle('popup-open');
  }


  
});*/

/*document.addEventListener('DOMContentLoaded', function() {
  const infoLink = document.querySelector('.infoside');
  const tryghetLink = document.querySelector('.tryghet');
  const popup = document.querySelector('.popups');
  const bodyOverlay = document.querySelector('.body-overlay');

  infoLink.addEventListener('click', togglePopup);
  tryghetLink.addEventListener('click', togglePopup);
  document.getElementById('cross').addEventListener('click', togglePopup);

  function togglePopup() {
      popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
      bodyOverlay.style.display = bodyOverlay.style.display === 'none' ? 'block' : 'none';
      document.body.classList.toggle('popup-open');

      if (popup.style.display === 'block') {
          document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
          document.body.style.overflow = ''; // Enable scrolling
      }
  }
});*/

document.addEventListener('DOMContentLoaded', function() {
  const infoLink = document.querySelector('.infoside');
  const tryghetLink = document.querySelector('.tryghet');
  const popup = document.querySelector('.popups');
  const bodyOverlay = document.querySelector('.body-overlay');

  infoLink.addEventListener('click', togglePopup);
  tryghetLink.addEventListener('click', togglePopup);
  document.getElementById('cross').addEventListener('click', togglePopup);
  bodyOverlay.addEventListener('click', closePopupOutside);

  function togglePopup() {
      popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
      bodyOverlay.style.display = bodyOverlay.style.display === 'none' ? 'block' : 'none';
      document.body.classList.toggle('popup-open');

      if (popup.style.display === 'block') {
          document.body.style.overflow = 'hidden'; // Disable scrolling
      } else {
          document.body.style.overflow = ''; // Enable scrolling
      }
  }

  function closePopupOutside(event) {
      if (event.target === bodyOverlay) {
          popup.style.display = 'none';
          bodyOverlay.style.display = 'none';
          document.body.classList.remove('popup-open');
          document.body.style.overflow = ''; // Enable scrolling
      }
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const lagerDiv = document.querySelector('.lager-div');
  const insidetwoc = document.querySelector('.insidetwoc');
  const body = document.body;

  insidetwoc.addEventListener('click', function() {
      // Toggle visibility of lager-div
      lagerDiv.style.display = lagerDiv.style.display === 'none' ? 'block' : 'none';

      // Change body background color when lager-div is open
      if (lagerDiv.style.display === 'block') {
          body.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // Light gray color with some transparency
      } else {
          body.style.backgroundColor = ''; // Revert to default background color
      }
  });

  // Close lager-div when clicking outside
  document.addEventListener('click', function(event) {
      if (!lagerDiv.contains(event.target) && !insidetwoc.contains(event.target)) {
          lagerDiv.style.display = 'none';
          body.style.backgroundColor = ''; // Revert to default background color
      }
  });
});







