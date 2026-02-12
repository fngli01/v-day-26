// script.js

// Function to handle button click events
function selectOption(option) {
  // Check which option was clicked
  if (option === "yes") {
    // Flash rainbow colors
    flashRainbowColors(function () {
      document.getElementById("question").style.display = "none"; // Hide the question
      displayCatHeart(); // Display the cat-heart.gif
    });
  } else if (option === "no") {
    // Change text on the "No" button to "You sure?"
    document.getElementById("no-button").innerText = "You sure?";
    // Increase font size of "Yes" button
    var yesButton = document.getElementById("yes-button");
    var currentFontSize = window
      .getComputedStyle(yesButton)
      .getPropertyValue("font-size");
    var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
    yesButton.style.fontSize = newSize + "px";
  } else {
    // If neither "Yes" nor "No" was clicked, show an alert message
    alert("Invalid option!");
  }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
  var colors = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ];
  var i = 0;
  var interval = setInterval(function () {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 200); // Change color every 200 milliseconds
  setTimeout(function () {
    clearInterval(interval);
    document.body.style.backgroundColor = ""; // Reset background color
    if (callback) {
      callback();
    }
  }, 2000); // Flash colors for 2 seconds
}

function displayCat() {
  var imageContainer = document.getElementById("image-container");

  // List of cat image files
  var catImages = ["cat.gif", "cat-2.gif", "cat-3.gif"];

  for (let i = 0; i < catImages.length; i++) {
    var catImage = new Image();
    catImage.src = catImages[i]; // Use different image each time
    catImage.alt = "Rotating Cat";
    catImage.classList.add("rotating-cat");

    imageContainer.appendChild(catImage);
  }
}

function displayCatHeart() {
  var imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = ""; // Clear previous cats

  // Create wrapper to hold image + text
  var wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";

  // Create the cat-heart image
  var catHeartImage = new Image();
  catHeartImage.src = "cat-heart.gif";
  catHeartImage.alt = "Cat Heart";

  wrapper.appendChild(catHeartImage);

  // Create the text below it
  var message = document.createElement("div");
  message.innerText =
    "Thank you my baby! Happy Valentine's Day ❤️, I love you - Fernando :)";
  message.style.fontFamily = "'Sacramento', cursive";
  message.style.fontSize = "36px";
  message.style.marginTop = "15px";
  message.style.color = "#FB607F";

  wrapper.appendChild(message);

  imageContainer.appendChild(wrapper);

  // Hide the Yes/No buttons
  document.getElementById("options").style.display = "none";
}

// Display the cat.gif initially
displayCat();
