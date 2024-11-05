let mCurrentIndex = 0;
let mImages = [];
const mUrl = 'https://api.npoint.io/a059b9cf0f6baf1de974';
const mWaitTime = 5000;

$(document).ready(() => {
  $('.details').hide(); // Hide details initially

  // Start the timer for the slideshow
  startSlideshow();

  // Select the moreIndicator button and add a click event
  $('.moreIndicator').click(() => {
    // Toggle the rotation classes (rot90 and rot270)
    $('.moreIndicator').toggleClass('rot90 rot270');
    // SlideToggle the visibility of the .details section
    $('.details').slideToggle();
  });

  // Select the "Next Photo" button and add a click event to call showNextPhoto
  $('#nextPhoto').click(showNextPhoto);

  // Select the "Previous Photo" button and add a click event to call showPrevPhoto
  $('#prevPhoto').click(showPrevPhoto);

  // Call fetchJSON() to load the initial set of images
  fetchJSON();
});

function fetchJSON() {
  fetch(mUrl)
    .then(response => response.json())
    .then(data => {
      mImages = data.images;
      swapPhoto();
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function swapPhoto() {
  if (mImages.length > 0) {
    const currentImage = mImages[mCurrentIndex];
    $('#photo').attr('src', currentImage.imgPath);
    $('.playerName').text(`Player: ${currentImage.playerName}`);
    $('.description').text(`Team: ${currentImage.description}`);
    $('.points').text(`Points: ${currentImage.points}`);
  }
}

function showNextPhoto() {
  mCurrentIndex = (mCurrentIndex + 1) % mImages.length;
  swapPhoto();
}

function showPrevPhoto() {
  mCurrentIndex = (mCurrentIndex - 1 + mImages.length) % mImages.length;
  swapPhoto();
}

function startSlideshow() {
  setInterval(showNextPhoto, mWaitTime);
}

// Function to fetch JSON data and store it in mImages
function fetchJSON () {
  // Use $.ajax here to request the JSON data from mUrl
  // On success, parse the JSON and push each image object into mImages array
  // After JSON is loaded, call swapPhoto() to display the first image
}

// Function to swap and display the next photo in the slideshow
function swapPhoto () {
  // Access mImages[mCurrentIndex] to update the image source and details
  // Update the #photo element's src attribute with the current image's path
  // Update the .location, .description, and .date elements with the current image's details
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto () {
  // Increment mCurrentIndex and call swapPhoto()
  // Ensure it loops back to the beginning if mCurrentIndex exceeds array length
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto () {
  // Decrement mCurrentIndex and call swapPhoto()
  // Ensure it loops to the end if mCurrentIndex is less than 0
}

// Starter code for the timer function
function startTimer () {
  // Create a timer to automatically call `showNextPhoto()` every mWaitTime milliseconds
  // Consider using setInterval to achieve this functionality
  // Hint: Make sure only one timer runs at a time
}
