// Get the image element
const bouncingImage = document.querySelector('.bouncing-image img');

// Set initial position and movement speed
let posX = 100; // Starting X position
let posY = 100; // Starting Y position
let speedX = 1; // Horizontal speed
let speedY = 1; // Vertical speed

// Function to move the image
function moveImage() {
    // Update position
    posX += speedX;
    posY += speedY;

    // Bounce off walls
    if (posX + bouncingImage.offsetWidth >= window.innerWidth || posX <= 0) {
        speedX = -speedX; // Reverse direction
    }
    if (posY + bouncingImage.offsetHeight >= window.innerHeight || posY <= 0) {
        speedY = -speedY; // Reverse direction
    }

    // Apply new position
    bouncingImage.style.left = `${posX}px`;
    bouncingImage.style.top = `${posY}px`;

    // Call the function again
    requestAnimationFrame(moveImage);
}

// Initialize the movement
bouncingImage.style.position = 'absolute';
moveImage();
