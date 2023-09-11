document.getElementById("changeButton").addEventListener("click", function() {
    document.getElementById("word").innerHTML = "New Word";
  });
// Get the button and div elements
const changeColorButton = document.getElementById("changeColorButton");
const colorDiv = document.getElementById("colorDiv");

// Add click event listener to the button
changeColorButton.addEventListener("click", function() {
// Generate a random color using RGB values
const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
  
// Change the background color of the div
colorDiv.style.backgroundColor = randomColor;
});

// Function to generate a random number between 0 and 255
function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}
function changeFontSize() {
    var textElement = document.getElementById("text");
    var currentSize = window.getComputedStyle(textElement).fontSize;
    var newSize = parseInt(currentSize) + 2; // Increase font size by 2 pixels
    textElement.style.fontSize = newSize + "px";
  }
// Get the button element
const button = document.getElementById('borderButton');

// Add event listener to the button
button.addEventListener('click', function() {
// Get the element you want to change the border style of
const element = document.getElementById('elementId');

// Toggle the CSS class on the element
element.classList.toggle('border-style');
});
// Get the button element
const button = document.getElementById('hideButton');

// Add event listener to the button
button.addEventListener('click', function() {
// Get the paragraph element
const paragraph = document.getElementById('paragraph');

// Hide the paragraph by changing the display property
paragraph.style.display = 'none';
});
// Get the button element
const button = document.getElementById('showButton');

// Add event listener to the button
button.addEventListener('click', function() {
  // Get the paragraph elements
  const paragraph1 = document.getElementById('Nourhan');
  const paragraph2 = document.getElementById('Essam');

  // Check if paragraph1 is hidden
  if (paragraph1.classList.contains('hidden')) {
    // Show paragraph1
    paragraph1.classList.remove('hidden');
  } else {
    // Show paragraph2
    paragraph2.classList.remove('hidden');
  }
});
